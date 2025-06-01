import json
import pytest
from backend.app.main import app as flask_app # Import your Flask app instance

@pytest.fixture
def app_client():
    #flask_app.config['TESTING'] = True
    with flask_app.test_client() as client:
        yield client

@pytest.fixture
def sample_payload_all_options():
    return {
        "campaign_id": "test_campaign_api_001",
        "analysis_options": {
            "calculate_metrics": True,
            "identify_trends": {
                "enabled": True,
                "date_column": "Date",
                "metrics": ["Clicks", "CTR"],
                "time_period_days": 7
            },
            "detect_anomalies": {
                "enabled": True,
                "metric": "Clicks",
                "date_column": "Date",
                "z_threshold": 2.0,
                "window": 3
            },
            "compare_performance": {
                "enabled": True,
                "group_by_columns": ["CampaignName"],
                "metrics": ["Clicks", "CTR", "ROAS"]
            }
        },
        "raw_data": [
            {"Date": "2023-01-01", "CampaignName": "Alpha", "Impressions": 1000, "Clicks": 100, "Cost": 50, "Conversions": 5, "ConversionValue": 250},
            {"Date": "2023-01-02", "CampaignName": "Alpha", "Impressions": 1100, "Clicks": 110, "Cost": 55, "Conversions": 6, "ConversionValue": 300},
            {"Date": "2023-01-03", "CampaignName": "Beta", "Impressions": 800, "Clicks": 300, "Cost": 40, "Conversions": 3, "ConversionValue": 150},
            {"Date": "2023-01-04", "CampaignName": "Alpha", "Impressions": 1200, "Clicks": 150, "Cost": 60, "Conversions": 8, "ConversionValue": 400},
            {"Date": "2023-01-05", "CampaignName": "Beta", "Impressions": 900, "Clicks": 80, "Cost": 45, "Conversions": 4, "ConversionValue": 200},
            {"Date": "2023-01-06", "CampaignName": "Alpha", "Impressions": 1300, "Clicks": 120, "Cost": 65, "Conversions": 7, "ConversionValue": 350},
            {"Date": "2023-01-07", "CampaignName": "Beta", "Impressions": 750, "Clicks": 60, "Cost": 30, "Conversions": 2, "ConversionValue": 100},
            {"Date": "2023-01-08", "CampaignName": "Alpha", "Impressions": 1050, "Clicks": 90, "Cost": 58, "Conversions": 5, "ConversionValue": 280}
        ]
    }

def test_analyze_google_ads_success_all_options(app_client, sample_payload_all_options):
    response = app_client.post('/api/v1/analyze/google-ads', json=sample_payload_all_options)
    data = response.get_json()

    assert response.status_code == 200
    assert data['success'] is True
    assert data['campaign_id'] == "test_campaign_api_001"
    assert 'results' in data
    assert 'derived_metrics' in data['results']
    assert 'performance_trends' in data['results']
    assert 'anomalies' in data['results']
    assert 'performance_comparison' in data['results']
    assert len(data['results']['derived_metrics']) == len(sample_payload_all_options['raw_data'])

def test_analyze_google_ads_no_json_payload(app_client):
    response = app_client.post('/api/v1/analyze/google-ads', data="not json", content_type="text/plain") # Intentionally wrong content type
    data = response.get_json()
    assert response.status_code == 400
    assert data['success'] is False
    assert "error" in data
    assert "No input data provided or data is not in JSON format." in data['error']

def test_analyze_google_ads_empty_json_payload(app_client):
    response = app_client.post('/api/v1/analyze/google-ads', json={})
    data = response.get_json()
    assert response.status_code == 400
    assert data['success'] is False
    assert "Missing or invalid 'raw_data' key: must be a list of records." in data['error']

def test_analyze_google_ads_missing_raw_data(app_client):
    payload = {"campaign_id": "test_missing_raw_data"}
    response = app_client.post('/api/v1/analyze/google-ads', json=payload)
    data = response.get_json()
    assert response.status_code == 400
    assert data['success'] is False
    assert "Missing or invalid 'raw_data'" in data['error']

def test_analyze_google_ads_empty_raw_data_list(app_client):
    payload = {"raw_data": []}
    response = app_client.post('/api/v1/analyze/google-ads', json=payload)
    data = response.get_json()
    assert response.status_code == 400
    assert data['success'] is False
    assert "'raw_data' resulted in an empty DataFrame" in data['error']

def test_analyze_google_ads_options_disabled(app_client, sample_payload_all_options):
    payload = sample_payload_all_options.copy()
    payload['analysis_options']['identify_trends']['enabled'] = False
    payload['analysis_options']['detect_anomalies']['enabled'] = False

    response = app_client.post('/api/v1/analyze/google-ads', json=payload)
    data = response.get_json()

    assert response.status_code == 200
    assert data['success'] is True
    assert 'results' in data
    assert 'derived_metrics' in data['results']
    assert 'performance_trends' not in data['results']
    assert 'anomalies' not in data['results']
    assert 'performance_comparison' in data['results']

def test_analyze_google_ads_trend_invalid_date_column(app_client, sample_payload_all_options):
    payload = sample_payload_all_options.copy()
    payload['analysis_options']['identify_trends']['date_column'] = "InvalidDateColumn"

    response = app_client.post('/api/v1/analyze/google-ads', json=payload)
    data = response.get_json()

    assert response.status_code == 200
    assert data['success'] is True
    assert 'performance_trends' in data['results']
    assert 'error' in data['results']['performance_trends']
    assert "not found for trends" in data['results']['performance_trends']['error']

def test_analyze_google_ads_anomaly_invalid_metric(app_client, sample_payload_all_options):
    payload = sample_payload_all_options.copy()
    payload['analysis_options']['detect_anomalies']['metric'] = "InvalidMetric"

    response = app_client.post('/api/v1/analyze/google-ads', json=payload)
    data = response.get_json()

    assert response.status_code == 200
    assert data['success'] is True
    assert 'anomalies' in data['results']
    assert 'error' in data['results']['anomalies']
    assert "not found for anomalies" in data['results']['anomalies']['error']

def test_analyze_google_ads_malformed_raw_data_entry(app_client, sample_payload_all_options):
    payload = sample_payload_all_options.copy()
    payload['raw_data'] = ["not a dict"]

    response = app_client.post('/api/v1/analyze/google-ads', json=payload)
    data = response.get_json()

    assert response.status_code == 400
    assert data['success'] is False
    assert "Data is missing essential columns for analysis" in data['error']

# Test for when 'calculate_metrics' is explicitly false
def test_analyze_no_derived_metrics_if_option_false(app_client, sample_payload_all_options):
    payload = sample_payload_all_options.copy()
    payload['analysis_options']['calculate_metrics'] = False
    # Disable other options that might depend on derived metrics if not handled
    payload['analysis_options']['identify_trends']['enabled'] = False
    payload['analysis_options']['detect_anomalies']['enabled'] = False
    payload['analysis_options']['compare_performance']['enabled'] = False


    response = app_client.post('/api/v1/analyze/google-ads', json=payload)
    data = response.get_json()

    assert response.status_code == 200
    assert data['success'] is True
    assert 'derived_metrics' not in data['results']

# Test for trend calculation on a non-derived metric if derived_metrics are not calculated
def test_analyze_trend_on_raw_metric_if_derived_disabled(app_client, sample_payload_all_options):
    payload = sample_payload_all_options.copy()
    payload['analysis_options']['calculate_metrics'] = False # Disable derived metrics
    payload['analysis_options']['identify_trends']['enabled'] = True
    payload['analysis_options']['identify_trends']['metrics'] = ["Clicks"] # 'Clicks' is a raw metric
    payload['analysis_options']['detect_anomalies']['enabled'] = False
    payload['analysis_options']['compare_performance']['enabled'] = False

    response = app_client.post('/api/v1/analyze/google-ads', json=payload)
    data = response.get_json()

    assert response.status_code == 200
    assert data['success'] is True
    assert 'derived_metrics' not in data['results']
    assert 'performance_trends' in data['results']
    assert 'Clicks' in data['results']['performance_trends'] # Trend for Clicks should be calculated

# Test for behavior when date column for trends is missing in raw_data
def test_analyze_trends_missing_date_column_in_raw_data(app_client, sample_payload_all_options):
    payload = sample_payload_all_options.copy()
    # Remove Date column from raw_data
    for item in payload['raw_data']:
        del item['Date']

    payload['analysis_options']['identify_trends']['enabled'] = True
    payload['analysis_options']['identify_trends']['date_column'] = "Date" # Still try to use 'Date'

    response = app_client.post('/api/v1/analyze/google-ads', json=payload)
    data = response.get_json()

    assert response.status_code == 400 # Now expects 400 due to essential 'Date' column missing
    assert data['success'] is False
    assert "error" in data
    assert "Data is missing essential columns for analysis: Date" in data['error']
