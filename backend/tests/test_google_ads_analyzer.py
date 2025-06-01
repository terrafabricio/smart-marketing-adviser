import pandas as pd
import numpy as np
from pandas.testing import assert_frame_equal, assert_series_equal
import pytest # Import pytest
from backend.app.services.google_ads_analyzer import (
    calculate_derived_metrics,
    identify_performance_trends,
    detect_anomalies,
    compare_performance
)

# Sample data for tests
@pytest.fixture
def sample_ads_data() -> pd.DataFrame:
    data = {
        'Date': pd.to_datetime(['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05',
                                 '2023-01-06', '2023-01-07', '2023-01-08']),
        'CampaignName': ['Campaign A', 'Campaign A', 'Campaign B', 'Campaign A', 'Campaign B', 'Campaign A', 'Campaign B', 'Campaign A'],
        'AdGroupName': ['AdGroup 1', 'AdGroup 2', 'AdGroup 1', 'AdGroup 1', 'AdGroup 2', 'AdGroup 2', 'AdGroup 1', 'AdGroup 1'],
        'Impressions': [1000, 1200, 800, 1100, 900, 1300, 700, 1050],
        'Clicks': [100, 110, 70, 120, 80, 125, 60, 115],
        'Cost': [50.0, 55.0, 40.0, 60.0, 45.0, 65.0, 30.0, 58.0],
        'Conversions': [5.0, 6.0, 3.0, 7.0, 4.0, 8.0, 2.0, 6.0],
        'ConversionValue': [250.0, 300.0, 150.0, 350.0, 200.0, 400.0, 100.0, 320.0]
    }
    return pd.DataFrame(data)

@pytest.fixture
def data_with_zeros() -> pd.DataFrame:
    data = {
        'Date': pd.to_datetime(['2023-01-01', '2023-01-02']),
        'Impressions': [1000, 0],
        'Clicks': [0, 10], # Click is 0 for first row
        'Cost': [50.0, 0], # Cost is 0 for second row
        'Conversions': [0, 0], # All conversions are 0
        'ConversionValue': [0.0, 0.0]
    }
    return pd.DataFrame(data)

# Tests for calculate_derived_metrics
def test_calculate_derived_metrics_basic(sample_ads_data):
    df = calculate_derived_metrics(sample_ads_data)
    assert 'CTR' in df.columns
    assert 'CPC' in df.columns
    assert 'ConversionRate' in df.columns
    assert 'CPA' in df.columns
    assert 'ROAS' in df.columns
    # Spot check a few values
    assert df.loc[df['CampaignName'] == 'Campaign A', 'CTR'].iloc[0] == pytest.approx((100/1000)*100)
    assert df.loc[df['CampaignName'] == 'Campaign A', 'CPC'].iloc[0] == pytest.approx(50.0/100.0)
    assert df.loc[df['CampaignName'] == 'Campaign A', 'ConversionRate'].iloc[0] == pytest.approx((5.0/100.0)*100)
    assert df.loc[df['CampaignName'] == 'Campaign A', 'CPA'].iloc[0] == pytest.approx(50.0/5.0)
    assert df.loc[df['CampaignName'] == 'Campaign A', 'ROAS'].iloc[0] == pytest.approx(250.0/50.0)

def test_calculate_derived_metrics_missing_columns(sample_ads_data):
    df_missing = sample_ads_data[['Clicks', 'Impressions']].copy()
    df_calculated = calculate_derived_metrics(df_missing)
    assert 'CTR' in df_calculated.columns
    assert 'CPC' not in df_calculated.columns # Cost is missing
    assert 'ConversionRate' not in df_calculated.columns # Conversions is missing
    assert 'CPA' not in df_calculated.columns
    assert 'ROAS' not in df_calculated.columns

def test_calculate_derived_metrics_with_zeros(data_with_zeros):
    df = calculate_derived_metrics(data_with_zeros)
    # CTR: Clicks=0, Imp=1000 -> CTR = 0
    assert df['CTR'].iloc[0] == 0
    # CPC: Clicks=0, Cost=50 -> CPC = 0 (as per current implementation, or could be inf/nan)
    assert df['CPC'].iloc[0] == 0 # based on current fillna(0)
    # CR: Clicks=0, Conv=0 -> CR = 0
    assert df['ConversionRate'].iloc[0] == 0
    # CPA: Cost=50, Conv=0 -> CPA = Cost (50) (as per current implementation)
    assert df['CPA'].iloc[0] == 50.0
     # ROAS: Cost=50, ConvValue=0 -> ROAS = 0
    assert df['ROAS'].iloc[0] == 0

    # CTR: Clicks=10, Imp=0 -> CTR = 0 (as per current implementation with fillna(0))
    assert df['CTR'].iloc[1] == 0
    # CPC: Clicks=10, Cost=0 -> CPC = 0
    assert df['CPC'].iloc[1] == 0
    # CR: Clicks=10, Conv=0 -> CR = 0
    assert df['ConversionRate'].iloc[1] == 0
    # CPA: Cost=0, Conv=0 -> CPA = 0
    assert df['CPA'].iloc[1] == 0
    # ROAS: Cost=0, ConvValue=0 -> ROAS = 0
    assert df['ROAS'].iloc[1] == 0


# Tests for identify_performance_trends
def test_identify_performance_trends_basic(sample_ads_data):
    # Create a predictable trend for Clicks: 100, 110, 70, 120, 80, 125, 60, 115
    # Trend for 7 days on 'Clicks'
    # Data for last 7 days: 110, 70, 120, 80, 125, 60, 115
    # Start value: 110 (from 2023-01-02), End value: 115 (from 2023-01-08)
    # Change = (115 - 110) / 110 * 100
    expected_change_clicks = ((115.0 - 110.0) / 110.0) * 100
    trends = identify_performance_trends(sample_ads_data, metrics=['Clicks', 'Cost'], date_column='Date', time_period_days=7)
    assert 'Clicks' in trends
    assert trends['Clicks'] == pytest.approx(expected_change_clicks)

def test_identify_performance_trends_insufficient_data(sample_ads_data):
    short_df = sample_ads_data.head(1).copy()
    trends = identify_performance_trends(short_df, metrics=['Clicks'], date_column='Date', time_period_days=7)
    assert trends == {} # Not enough data

def test_identify_performance_trends_missing_metric(sample_ads_data):
    trends = identify_performance_trends(sample_ads_data, metrics=['NonExistentMetric'], date_column='Date', time_period_days=7)
    assert 'NonExistentMetric' not in trends # Or check if trends is empty if only this metric was passed

def test_identify_performance_trends_initial_zero(sample_ads_data):
    df = sample_ads_data.copy()
    df.loc[1, 'Clicks'] = 0 # Second day Clicks = 0 (start of 7 day period)
    df.loc[7, 'Clicks'] = 10 # Last day Clicks = 10
    # Expected: (10 - 0) / 0 -> inf
    trends = identify_performance_trends(df, metrics=['Clicks'], date_column='Date', time_period_days=7)
    assert trends['Clicks'] == np.inf


# Tests for detect_anomalies
def test_detect_anomalies_basic(sample_ads_data):
    df_anomaly = sample_ads_data.copy()
    df_anomaly.loc[3, 'Clicks'] = 500 # Introduce an anomaly in Clicks at index 3
    anomalies = detect_anomalies(df_anomaly, metric='Clicks', date_column='Date', z_threshold=2.0)
    assert not anomalies.empty
    assert len(anomalies) == 1
    assert anomalies.iloc[0]['Clicks'] == 500
    assert anomalies.iloc[0]['Date'] == pd.to_datetime('2023-01-04')

def test_detect_anomalies_window(sample_ads_data):
    df_anomaly = sample_ads_data.copy()
    df_anomaly.loc[3, 'Cost'] = 200 # Introduce an anomaly in Cost
    anomalies = detect_anomalies(df_anomaly, metric='Cost', date_column='Date', z_threshold=1.1, window=3) # Lowered threshold further
    assert not anomalies.empty
    assert anomalies.iloc[0]['Cost'] == 200

def test_detect_anomalies_no_anomalies(sample_ads_data):
    anomalies = detect_anomalies(sample_ads_data, metric='Clicks', date_column='Date', z_threshold=3.0) # High threshold
    assert anomalies.empty

def test_detect_anomalies_missing_metric(sample_ads_data):
    anomalies = detect_anomalies(sample_ads_data, metric='NonExistent', date_column='Date')
    assert anomalies.empty

# Tests for compare_performance
def test_compare_performance_basic(sample_ads_data):
    # Calculate derived metrics first as they might be used in comparison
    df_with_metrics = calculate_derived_metrics(sample_ads_data)
    comparison = compare_performance(df_with_metrics, group_by_columns=['CampaignName'], metrics=['CTR', 'Cost'])
    assert not comparison.empty
    assert len(comparison) == 2 # Campaign A, Campaign B
    assert 'CampaignName' in comparison.columns
    assert 'CTR' in comparison.columns
    assert 'Cost' in comparison.columns
    # Check if mean is calculated correctly for Campaign A Cost
    # Campaign A Costs: 50, 55, 60, 65, 58
    campaign_a_cost_mean = df_with_metrics[df_with_metrics['CampaignName'] == 'Campaign A']['Cost'].mean()
    assert comparison[comparison['CampaignName'] == 'Campaign A']['Cost'].iloc[0] == pytest.approx(campaign_a_cost_mean)

def test_compare_performance_multiple_groups(sample_ads_data):
    comparison = compare_performance(sample_ads_data, group_by_columns=['CampaignName', 'AdGroupName'], metrics=['Clicks'])
    assert not comparison.empty
    # Expected groups: (A, G1), (A, G2), (B, G1), (B, G2) -> 4 groups if all exist
    # A,G1: 100, 120, 115 -> (100+120+115)/3
    # A,G2: 110, 125 -> (110+125)/2
    # B,G1: 70, 60 -> (70+60)/2
    # B,G2: 80 -> 80
    expected_len = len(sample_ads_data[['CampaignName', 'AdGroupName']].drop_duplicates())
    assert len(comparison) == expected_len


def test_compare_performance_missing_group_column(sample_ads_data):
    comparison = compare_performance(sample_ads_data, group_by_columns=['NonExistentCampaign'], metrics=['Clicks'])
    assert comparison.empty

def test_compare_performance_missing_metric_column(sample_ads_data):
    comparison = compare_performance(sample_ads_data, group_by_columns=['CampaignName'], metrics=['NonExistentMetric'])
    # The function should still run but NonExistentMetric column will be absent or the result might be empty if no valid metrics
    # Based on current implementation, it will print a warning and proceed if other metrics are valid, or return empty if no metrics are valid.
    # If only NonExistentMetric is passed, it should be empty.
    assert comparison.empty # Since 'NonExistentMetric' is the only one and it's missing

def test_compare_performance_non_numeric_metric(sample_ads_data):
    df_non_numeric = sample_ads_data.copy()
    df_non_numeric['Clicks'] = df_non_numeric['Clicks'].astype(str)
    # Cost is still numeric
    comparison = compare_performance(df_non_numeric, group_by_columns=['CampaignName'], metrics=['Clicks', 'Cost'])
    assert 'Clicks' not in comparison.columns # Clicks should be excluded
    assert 'Cost' in comparison.columns # Cost should still be there
    assert not comparison.empty

# Helper to run tests if the file is executed directly (optional)
if __name__ == "__main__":
    pytest.main()
