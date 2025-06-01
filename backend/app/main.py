from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
import pandas as pd
from backend.app.services.google_ads_analyzer import (
    calculate_derived_metrics,
    identify_performance_trends,
    detect_anomalies,
    compare_performance
)

# Load environment variables from .env file
load_dotenv(dotenv_path='../.env') # Adjusted path if .env is in backend/

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello from Flask Backend for Google Ads Analysis!"

@app.route('/api/v1/analyze/google-ads', methods=['POST'])
def analyze_google_ads_data():
    try:
        data = request.get_json(silent=True) # Use silent=True to return None on error/wrong type

        if data is None: # More explicit check for when get_json fails (e.g. wrong content type or malformed JSON)
            return jsonify({"success": False, "error": "No input data provided or data is not in JSON format."}), 400

        raw_data_list = data.get('raw_data')
        # Explicitly check for None or not a list. Allow empty list to proceed to DataFrame conversion.
        if raw_data_list is None or not isinstance(raw_data_list, list):
            return jsonify({"success": False, "error": "Missing or invalid 'raw_data' key: must be a list of records."}), 400

        # Convert raw_data to DataFrame
        try:
            df = pd.DataFrame(raw_data_list)
            if df.empty:
                 return jsonify({"success": False, "error": "'raw_data' resulted in an empty DataFrame"}), 400

            # Basic validation for essential columns
            # These columns are generally expected by the analysis functions.
            # Adjust this list based on truly essential columns for a minimum viable analysis.
            essential_columns = ['Clicks', 'Impressions', 'Cost', 'Conversions', 'ConversionValue', 'Date']
            missing_essentials = [col for col in essential_columns if col not in df.columns]
            if missing_essentials:
                return jsonify({"success": False, "error": f"Data is missing essential columns for analysis: {', '.join(missing_essentials)}"}), 400

        except Exception as e:
            return jsonify({"success": False, "error": f"Error converting 'raw_data' to DataFrame or initial validation: {str(e)}"}), 400


        analysis_options = data.get('analysis_options', {})
        results = {}

        # 1. Calculate Derived Metrics
        # This is often a prerequisite for other analyses, so we might call it by default if data is present
        # or make it explicitly controllable. For now, let's assume it's usually wanted.
        # If 'Date' column exists and is not datetime, try to convert it.
        # This should ideally be handled robustly based on expected date formats.
        if 'Date' in df.columns and not pd.api.types.is_datetime64_any_dtype(df['Date']):
            try:
                df['Date'] = pd.to_datetime(df['Date'])
            except Exception as e:
                # Log this error, but proceed if other columns are usable
                print(f"Warning: Could not convert 'Date' column to datetime: {str(e)}")


        df_calculated_metrics = calculate_derived_metrics(df.copy()) # Use .copy() to avoid modifying original df in place
        if analysis_options.get('calculate_metrics', True): # Default to true or control via option
            results['derived_metrics'] = df_calculated_metrics.to_dict(orient='records')


        # 2. Identify Performance Trends
        trends_options = analysis_options.get('identify_trends', {})
        if trends_options.get('enabled', False):
            date_column = trends_options.get('date_column', 'Date')
            metrics_to_trend = trends_options.get('metrics', [])
            time_period = trends_options.get('time_period_days', 7)

            # Trends might operate on df_calculated_metrics if derived metrics are inputs
            input_df_for_trends = df_calculated_metrics if 'derived_metrics' in results else df
            if not metrics_to_trend:
                results['performance_trends'] = {} # Or a message indicating no metrics specified
            elif date_column not in input_df_for_trends.columns:
                 results['performance_trends'] = {"error": f"Date column '{date_column}' not found for trends."}
            else:
                trends = identify_performance_trends(input_df_for_trends.copy(), metrics_to_trend, date_column, time_period)
                results['performance_trends'] = trends

        # 3. Detect Anomalies
        anomalies_options = analysis_options.get('detect_anomalies', {})
        if anomalies_options.get('enabled', False):
            metric_to_scan = anomalies_options.get('metric')
            date_column_anomalies = anomalies_options.get('date_column', 'Date')
            z_thresh = anomalies_options.get('z_threshold', 3.0)
            window = anomalies_options.get('window') # Optional

            # Anomalies might operate on df_calculated_metrics
            input_df_for_anomalies = df_calculated_metrics if 'derived_metrics' in results else df
            if not metric_to_scan:
                results['anomalies'] = [] # Or a message indicating no metric specified
            elif date_column_anomalies not in input_df_for_anomalies.columns:
                results['anomalies'] = {"error": f"Date column '{date_column_anomalies}' not found for anomalies."}
            elif metric_to_scan not in input_df_for_anomalies.columns:
                 results['anomalies'] = {"error": f"Metric column '{metric_to_scan}' not found for anomalies."}
            else:
                anomalies_df = detect_anomalies(input_df_for_anomalies.copy(), metric_to_scan, date_column_anomalies, z_thresh, window)
                results['anomalies'] = anomalies_df.to_dict(orient='records')

        # 4. Compare Performance
        comparison_options = analysis_options.get('compare_performance', {})
        if comparison_options.get('enabled', False):
            group_by = comparison_options.get('group_by_columns', [])
            metrics_to_compare = comparison_options.get('metrics', [])

            # Comparison might operate on df_calculated_metrics
            input_df_for_comparison = df_calculated_metrics if 'derived_metrics' in results else df
            if not group_by or not metrics_to_compare:
                results['performance_comparison'] = [] # Or a message
            else:
                comparison_df = compare_performance(input_df_for_comparison.copy(), group_by, metrics_to_compare)
                results['performance_comparison'] = comparison_df.to_dict(orient='records')

        return jsonify({
            "success": True,
            "campaign_id": data.get("campaign_id"),
            "results": results,
            "message": "Analysis completed successfully."
        }), 200

    except pd.errors.EmptyDataError:
        return jsonify({"success": False, "error": "Provided 'raw_data' is empty or in an invalid format."}), 400
    except KeyError as e:
        return jsonify({"success": False, "error": f"Missing expected key in 'raw_data' or 'analysis_options': {str(e)}"}), 400
    except ValueError as e: # Catch more specific errors if possible
        return jsonify({"success": False, "error": f"Invalid value in input: {str(e)}"}), 400
    except Exception as e:
        # Log the exception e for server-side debugging
        print(f"Unhandled exception: {str(e)}")
        return jsonify({"success": False, "error": f"An unexpected error occurred: {str(e)}"}), 500


if __name__ == '__main__':
    # Correct the path for .env when running main.py directly from backend/app/
    # If main.py is in backend/app and .env is in backend/, path is '../.env'
    # If main.py is run from backend/ (e.g. python app/main.py), path is '.env'
    # The load_dotenv at the top of the file uses '../.env' assuming .env is in backend/app

    # Ensure the .env path is correct based on how you run it.
    # If .env is in 'backend' directory, and you run 'python backend/app/main.py' from repo root:
    # load_dotenv(dotenv_path='backend/.env') # Path from repo root
    # If you 'cd backend' then 'python app/main.py':
    # load_dotenv(dotenv_path='.env')
    # If you 'cd backend/app' then 'python main.py':
    # load_dotenv(dotenv_path='../.env')

    # The existing load_dotenv(dotenv_path='../.env') is for when CWD is backend/app

    port = int(os.environ.get('PORT', 5001))
    # For local dev, Flask's auto-reload is often better than Werkzeug's.
    # Werkzeug reloader might be problematic with how some IDEs/debuggers work.
    # Consider app.run(debug=True, port=port, use_reloader=False) if issues.
    app.run(host='0.0.0.0', port=port, debug=True)
