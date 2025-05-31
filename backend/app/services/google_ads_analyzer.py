import pandas as pd
import numpy as np

def calculate_derived_metrics(df: pd.DataFrame) -> pd.DataFrame:
    """
    Calculates derived metrics like CTR, CPC, Conversion Rate, CPA, and ROAS.

    Args:
        df (pd.DataFrame): DataFrame with basic Google Ads data.
                           Expected columns: 'Clicks', 'Cost', 'Impressions',
                           'Conversions', 'ConversionValue' (or 'Revenue').
                           Column names are case-sensitive.

    Returns:
        pd.DataFrame: DataFrame with the new derived metric columns.
                      Returns original df if essential columns are missing.
    """
    df_calculated = df.copy()

    # CTR = (Clicks / Impressions) * 100
    if 'Clicks' in df_calculated.columns and 'Impressions' in df_calculated.columns:
        df_calculated['CTR'] = (df_calculated['Clicks'] / df_calculated['Impressions']) * 100
        df_calculated['CTR'] = df_calculated['CTR'].replace([np.inf, -np.inf], np.nan) # Replace inf with NaN
        df_calculated['CTR'] = df_calculated['CTR'].fillna(0) # Handle division by zero (original NaNs and NaNs from inf)
    else:
        print("Warning: 'Clicks' or 'Impressions' column not found. CTR not calculated.")

    # CPC = Cost / Clicks
    if 'Cost' in df_calculated.columns and 'Clicks' in df_calculated.columns:
        df_calculated['CPC'] = df_calculated['Cost'] / df_calculated['Clicks']
        df_calculated['CPC'] = df_calculated['CPC'].replace([np.inf, -np.inf], np.nan) # Replace inf with NaN first
        df_calculated['CPC'] = df_calculated['CPC'].fillna(0) # Handle division by zero (including original NaNs and new NaNs from inf)
    else:
        print("Warning: 'Cost' or 'Clicks' column not found. CPC not calculated.")

    # Conversion Rate = (Conversions / Clicks) * 100
    if 'Conversions' in df_calculated.columns and 'Clicks' in df_calculated.columns:
        df_calculated['ConversionRate'] = (df_calculated['Conversions'] / df_calculated['Clicks']) * 100
        df_calculated['ConversionRate'] = df_calculated['ConversionRate'].fillna(0) # Handle division by zero
    else:
        print("Warning: 'Conversions' or 'Clicks' column not found. ConversionRate not calculated.")

    # CPA = Cost / Conversions
    if 'Cost' in df_calculated.columns and 'Conversions' in df_calculated.columns:
        df_calculated['CPA'] = df_calculated['Cost'] / df_calculated['Conversions']
        # For CPA, if Conversions is 0, CPA is effectively infinite.
        # We can leave it as NaN or replace with a large number or Cost itself, depending on business logic.
        # Here, replacing with Cost if Conversions is 0, assuming cost was spent but no conversions.
        df_calculated['CPA'] = df_calculated.apply(
            lambda row: row['Cost'] if row['Conversions'] == 0 and row['Cost'] > 0 else (row['Cost'] / row['Conversions'] if row['Conversions'] > 0 else 0),
            axis=1
        )
        df_calculated['CPA'] = df_calculated['CPA'].fillna(0)

    else:
        print("Warning: 'Cost' or 'Conversions' column not found. CPA not calculated.")

    # ROAS = ConversionValue / Cost
    # Assuming 'ConversionValue' or 'Revenue' column exists for ROAS calculation
    revenue_col = None
    if 'ConversionValue' in df_calculated.columns:
        revenue_col = 'ConversionValue'
    elif 'Revenue' in df_calculated.columns:
        revenue_col = 'Revenue'

    if revenue_col and 'Cost' in df_calculated.columns:
        df_calculated['ROAS'] = df_calculated[revenue_col] / df_calculated['Cost']
        # Handle division by zero if Cost is 0. If revenue is also 0, ROAS is 0. If revenue > 0 and cost is 0, ROAS is 'inf'.
        df_calculated['ROAS'] = df_calculated['ROAS'].replace([np.inf, -np.inf], np.nan) # Or some other placeholder for infinite ROAS
        df_calculated['ROAS'] = df_calculated['ROAS'].fillna(0) # If Cost is 0 and Revenue is 0
    else:
        print(f"Warning: '{revenue_col or 'ConversionValue/Revenue'}' or 'Cost' column not found. ROAS not calculated.")

    return df_calculated

def identify_performance_trends(df: pd.DataFrame, metrics: list, date_column: str = 'Date', time_period_days: int = 7) -> dict:
    """
    Identifies performance trends for specified metrics over a time period.
    Calculates the percentage change from the beginning to the end of the period.
    Assumes df is sorted by date_column.

    Args:
        df (pd.DataFrame): DataFrame with time series data. Must include a date_column.
        metrics (list): List of metric column names to analyze.
        date_column (str): Name of the column containing date/time information.
        time_period_days (int): Number of days to look back for the trend.

    Returns:
        dict: A dictionary where keys are metric names and values are
              their percentage change over the period.
              Returns empty dict if essential columns/data are missing.
    """
    if date_column not in df.columns:
        print(f"Warning: Date column '{date_column}' not found. Trends not calculated.")
        return {}

    if not pd.api.types.is_datetime64_any_dtype(df[date_column]):
        try:
            df[date_column] = pd.to_datetime(df[date_column])
        except Exception as e:
            print(f"Warning: Could not convert '{date_column}' to datetime: {e}. Trends not calculated.")
            return {}

    df_sorted = df.sort_values(by=date_column)
    end_date = df_sorted[date_column].max()
    start_date = end_date - pd.Timedelta(days=time_period_days -1) # -1 because we include the end_date

    trends = {}

    # Filter for the last 'time_period_days'
    # Taking the closest available date if exact start_date is not present
    period_df = df_sorted[df_sorted[date_column] >= start_date]

    if period_df.empty or len(period_df) < 2: # Need at least two points to calculate a trend
        print(f"Warning: Not enough data within the last {time_period_days} days to calculate trends.")
        return {}

    for metric in metrics:
        if metric not in period_df.columns:
            print(f"Warning: Metric column '{metric}' not found. Trend for this metric not calculated.")
            continue

        # Ensure metric data is numeric
        if not pd.api.types.is_numeric_dtype(period_df[metric]):
            print(f"Warning: Metric column '{metric}' is not numeric. Trend for this metric not calculated.")
            continue

        # Get the first and last values in the filtered period
        # Using .iloc[0] and .iloc[-1] assumes the dataframe is sorted by date for this period.
        first_value_row = period_df.iloc[0]
        last_value_row = period_df.iloc[-1]

        # Check if we have distinct date points for start and end of period analysis
        # If only one distinct date, trend cannot be calculated meaningfully this way
        if first_value_row[date_column] == last_value_row[date_column] and len(period_df[date_column].unique()) == 1:
             print(f"Warning: Only one data point for metric '{metric}' in the period. Trend cannot be calculated.")
             trends[metric] = 0.0 # Or None, or np.nan
             continue


        initial_value = first_value_row[metric]
        final_value = last_value_row[metric]

        if pd.isna(initial_value) or pd.isna(final_value):
            print(f"Warning: NaN value encountered for metric '{metric}' in period. Trend calculation may be affected.")
            trends[metric] = np.nan # Or handle as per business logic
            continue

        if initial_value == 0:
            if final_value == 0:
                percentage_change = 0.0
            else:
                # Or a large number to signify massive change from zero, or np.inf
                # For simplicity, if initial is 0 and final is not, we can call it 100% if final is positive,
                # or -100% if final is negative, or simply skip/flag as special case.
                # A common way is to show actual change if initial is 0.
                # Here, let's represent it as a very large percentage if final_value is significant.
                percentage_change = np.inf if final_value > 0 else (0 if final_value == 0 else -np.inf)

        else:
            percentage_change = ((final_value - initial_value) / initial_value) * 100

        trends[metric] = percentage_change

    return trends

def detect_anomalies(df: pd.DataFrame, metric: str, date_column: str = 'Date', z_threshold: float = 3.0, window: int = None) -> pd.DataFrame:
    """
    Detects anomalies in a specific metric using the Z-score method.
    Anomalies are points where the Z-score is above the threshold.
    Can use a rolling window for Z-score calculation if window is specified.

    Args:
        df (pd.DataFrame): DataFrame with time series data.
        metric (str): The name of the metric column to analyze for anomalies.
        date_column (str): Name of the column containing date/time information.
        z_threshold (float): The Z-score threshold to identify an anomaly.
        window (int, optional): The rolling window size for calculating mean and std.
                                If None, uses global mean and std.

    Returns:
        pd.DataFrame: A DataFrame containing the original data of the anomalous points,
                      plus a column for the Z-score and the metric value.
                      Returns empty DataFrame if metric not found or data insufficient.
    """
    if metric not in df.columns:
        print(f"Warning: Metric column '{metric}' not found. Anomalies not detected.")
        return pd.DataFrame()

    if not pd.api.types.is_numeric_dtype(df[metric]):
        print(f"Warning: Metric column '{metric}' is not numeric. Anomalies not detected.")
        return pd.DataFrame()

    df_anomalies = df.copy()

    if window:
        if window <= 0 or window > len(df_anomalies):
            print(f"Warning: Invalid window size {window}. Using global calculation for anomalies.")
            rolling_mean = df_anomalies[metric].mean()
            rolling_std = df_anomalies[metric].std()
        else:
            rolling_mean = df_anomalies[metric].rolling(window=window, center=True).mean()
            rolling_std = df_anomalies[metric].rolling(window=window, center=True).std()
    else:
        rolling_mean = df_anomalies[metric].mean()
        rolling_std = df_anomalies[metric].std()

    # Handle cases where std might be zero (e.g., constant values in window)
    if isinstance(rolling_std, pd.Series):
        # For series, replace 0 std with a very small number to avoid division by zero, only where std is 0
        rolling_std = rolling_std.replace(0, np.nan).bfill().ffill() # try to fill NaNs from rolling
        if rolling_std.isnull().all(): # if all stds are NaN (e.g. single point or all same values)
             rolling_std = 1e-6 # fallback to small number if all else fails
        rolling_std = rolling_std.replace(0, 1e-6) # ensure no zeros remain
    elif rolling_std == 0:
        rolling_std = 1e-6 # A very small number to avoid division by zero if global std is 0

    df_anomalies['z_score'] = ((df_anomalies[metric] - rolling_mean) / rolling_std).abs()

    anomalous_points = df_anomalies[df_anomalies['z_score'] >= z_threshold]

    # Select relevant columns for the output
    result_columns = [date_column, metric, 'z_score']
    # Ensure date_column is present before trying to select it
    if date_column not in anomalous_points.columns:
         # if date_column was not in original df, it wont be in anomalous_points
         # We can try to add it if it's the index for example
        if anomalous_points.index.name == date_column and date_column not in anomalous_points.columns:
            anomalous_points = anomalous_points.reset_index() # make index a column
        elif date_column not in anomalous_points.columns: # if still not there, remove from list
            print(f"Warning: Date column '{date_column}' not found in DataFrame for anomaly results. It will be excluded.")
            result_columns.remove(date_column)


    return anomalous_points[result_columns].sort_values(by='z_score', ascending=False)

def compare_performance(df: pd.DataFrame, group_by_columns: list, metrics: list) -> pd.DataFrame:
    """
    Compares performance by grouping data by specified columns and calculating mean of metrics.

    Args:
        df (pd.DataFrame): DataFrame with Google Ads data.
        group_by_columns (list): List of column names to group by (e.g., ['CampaignName', 'AdGroupName']).
        metrics (list): List of metric column names to calculate the mean for.

    Returns:
        pd.DataFrame: A DataFrame with grouped data and mean of specified metrics.
                      Returns empty DataFrame if columns are missing.
    """
    if not all(col in df.columns for col in group_by_columns):
        missing_cols = [col for col in group_by_columns if col not in df.columns]
        print(f"Warning: Group by columns {missing_cols} not found. Comparison not performed.")
        return pd.DataFrame()

    if not all(metric in df.columns for metric in metrics):
        missing_metrics = [metric for metric in metrics if metric not in df.columns]
        print(f"Warning: Metric columns {missing_metrics} not found for comparison. They will be excluded.")
        # Filter out metrics that are not in df.columns
        metrics = [metric for metric in metrics if metric in df.columns]
        if not metrics: # If no valid metrics left
            print("Warning: No valid metrics available for comparison.")
            return pd.DataFrame()

    # Ensure metrics are numeric before attempting to aggregate
    numeric_metrics = []
    for metric in metrics:
        if pd.api.types.is_numeric_dtype(df[metric]):
            numeric_metrics.append(metric)
        else:
            print(f"Warning: Metric '{metric}' is not numeric and will be excluded from comparison.")

    if not numeric_metrics:
        print("Warning: No numeric metrics available for comparison.")
        return pd.DataFrame()

    try:
        # Group by the specified columns and calculate the mean for the numeric metrics
        # Explicitly set numeric_only=False if you want to try and handle non-numeric gracefully,
        # but Pandas >=2.0.0 defaults to numeric_only=False for mean() and might raise errors
        # if non-numeric data is present that cannot be averaged.
        # It's safer to ensure only numeric columns are passed to .mean().
        grouped_df = df.groupby(group_by_columns, as_index=False)[numeric_metrics].mean()
        return grouped_df
    except Exception as e:
        print(f"Error during performance comparison: {e}")
        return pd.DataFrame()

if __name__ == '__main__':
    # Create a sample DataFrame for testing the functions
    data = {
        'Date': pd.to_datetime(['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05',
                                 '2023-01-06', '2023-01-07', '2023-01-08', '2023-01-09', '2023-01-10']),
        'CampaignName': ['Campaign A', 'Campaign A', 'Campaign B', 'Campaign A', 'Campaign B',
                         'Campaign A', 'Campaign B', 'Campaign A', 'Campaign B', 'Campaign A'],
        'AdGroupName': ['AdGroup 1', 'AdGroup 2', 'AdGroup 1', 'AdGroup 1', 'AdGroup 2',
                        'AdGroup 2', 'AdGroup 1', 'AdGroup 1', 'AdGroup 2', 'AdGroup 2'],
        'Impressions': [1000, 1200, 800, 1100, 900, 1300, 700, 1050, 950, 1150],
        'Clicks': [100, 110, 70, 120, 80, 125, 60, 115, 85, 105],
        'Cost': [50, 55, 40, 60, 45, 65, 30, 58, 48, 52],
        'Conversions': [5, 6, 3, 7, 4, 8, 2, 6, 5, 5],
        'ConversionValue': [250, 300, 150, 350, 200, 400, 100, 320, 260, 280],
        'SomeOtherMetric': [10,12,8,11,9,13,7,10,9,11] # for anomaly testing
    }
    sample_df = pd.DataFrame(data)

    print("--- Calculating Derived Metrics ---")
    derived_df = calculate_derived_metrics(sample_df.copy())
    print(derived_df.head())
    print("\n")

    print("--- Identifying Performance Trends (CTR and CPA over 7 days) ---")
    # Ensure derived metrics are calculated first if they are to be used in trends
    trends_df = calculate_derived_metrics(sample_df.copy())
    trends = identify_performance_trends(trends_df, metrics=['CTR', 'CPA'], date_column='Date', time_period_days=7)
    print(trends)
    print("\n")

    print("--- Identifying Performance Trends (Clicks over 3 days) ---")
    trends_3_days = identify_performance_trends(sample_df.copy(), metrics=['Clicks'], date_column='Date', time_period_days=3)
    print(trends_3_days)
    print("\n")

    print("--- Detecting Anomalies (in Clicks, Z-score > 1, window=3) ---")
    # Add a clear anomaly for 'Clicks'
    anomaly_test_df = sample_df.copy()
    anomaly_test_df.loc[5, 'Clicks'] = 500 # Introduce an anomaly
    anomalies = detect_anomalies(anomaly_test_df, metric='Clicks',date_column='Date', z_threshold=1.0, window=3)
    print(anomalies)
    print("\n")

    print("--- Detecting Anomalies (in SomeOtherMetric, Z-score > 2, global) ---")
    anomaly_test_df2 = sample_df.copy()
    anomaly_test_df2.loc[1, 'SomeOtherMetric'] = 100 # Introduce an anomaly
    anomalies_global = detect_anomalies(anomaly_test_df2, metric='SomeOtherMetric', date_column='Date', z_threshold=2.0)
    print(anomalies_global)
    print("\n")


    print("--- Comparing Performance (mean CTR and Cost by CampaignName) ---")
    # Ensure derived metrics are calculated first
    comparison_df = calculate_derived_metrics(sample_df.copy())
    comparison_results = compare_performance(comparison_df,
                                             group_by_columns=['CampaignName', 'AdGroupName'],
                                             metrics=['CTR', 'Cost', 'ROAS'])
    print(comparison_results)
    print("\n")

    print("--- Test with missing columns for calculate_derived_metrics ---")
    missing_cols_df = pd.DataFrame({'Clicks': [100], 'Impressions': [1000]}) # Missing Cost, Conversions etc.
    print(calculate_derived_metrics(missing_cols_df))
    print("\n")

    print("--- Test trends with insufficient data ---")
    short_df = sample_df.head(1).copy()
    trends_short = identify_performance_trends(short_df, metrics=['Clicks'], date_column='Date', time_period_days=7)
    print(trends_short)
    print("\n")

    print("--- Test anomalies with non-numeric metric ---")
    non_numeric_df = sample_df.copy()
    non_numeric_df['Clicks'] = non_numeric_df['Clicks'].astype(str)
    anomalies_non_numeric = detect_anomalies(non_numeric_df, metric='Clicks', date_column='Date')
    print(anomalies_non_numeric)
