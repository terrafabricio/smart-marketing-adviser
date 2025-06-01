# Backend API para Análise de Google Ads

Este backend Flask fornece endpoints para analisar dados de campanhas do Google Ads.

## Pré-requisitos

- Python 3.8+
- Pip (Python package installer)

## Configuração

1.  Navegue até a pasta `backend`:
    ```bash
    cd backend
    ```
2.  Crie um ambiente virtual (recomendado):
    ```bash
    python -m venv venv
    source venv/bin/activate  # No Linux/macOS
    # venv\Scripts\activate  # No Windows
    ```
3.  Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```
4.  Verifique o arquivo `.env` na pasta `backend` e ajuste a `PORT` se necessário. O padrão é `5001`.

## Executando o Servidor

Com o ambiente virtual ativado e as dependências instaladas, execute o servidor Flask:

```bash
python app/main.py
```

O servidor estará rodando em `http://localhost:PORT` (ou `http://0.0.0.0:PORT`).

## Endpoints da API

### Analisar Dados do Google Ads

- **URL:** `/api/v1/analyze/google-ads`
- **Método:** `POST`
- **Content-Type:** `application/json`

- **Corpo da Requisição (Exemplo):**

  ```json
  {
    "campaign_id": "test_campaign_001",
    "analysis_options": {
      "calculate_metrics": true,
      "identify_trends": {
        "enabled": true,
        "date_column": "Date",
        "metrics": ["Clicks", "CTR", "Cost"],
        "time_period_days": 7
      },
      "detect_anomalies": {
        "enabled": true,
        "metric": "Clicks",
        "date_column": "Date",
        "z_threshold": 2.0,
        "window": 3
      },
      "compare_performance": {
        "enabled": true,
        "group_by_columns": ["CampaignName"],
        "metrics": ["Clicks", "CTR", "ROAS"]
      }
    },
    "raw_data": [
      {
        "Date": "2023-01-01", "CampaignName": "Campaign Alpha", "AdGroupName": "AdGroup A1",
        "Impressions": 1000, "Clicks": 100, "Cost": 50.0, "Conversions": 5, "ConversionValue": 250.0
      },
      {
        "Date": "2023-01-02", "CampaignName": "Campaign Alpha", "AdGroupName": "AdGroup A1",
        "Impressions": 1100, "Clicks": 110, "Cost": 55.0, "Conversions": 6, "ConversionValue": 300.0
      },
      {
        "Date": "2023-01-03", "CampaignName": "Campaign Beta", "AdGroupName": "AdGroup B1",
        "Impressions": 800, "Clicks": 70, "Cost": 40.0, "Conversions": 3, "ConversionValue": 150.0
      },
      {
        "Date": "2023-01-04", "CampaignName": "Campaign Alpha", "AdGroupName": "AdGroup A2",
        "Impressions": 1200, "Clicks": 150, "Cost": 60.0, "Conversions": 8, "ConversionValue": 400.0
      },
      {
        "Date": "2023-01-05", "CampaignName": "Campaign Beta", "AdGroupName": "AdGroup B1",
        "Impressions": 900, "Clicks": 80, "Cost": 45.0, "Conversions": 4, "ConversionValue": 200.0
      },
      {
        "Date": "2023-01-06", "CampaignName": "Campaign Alpha", "AdGroupName": "AdGroup A1",
        "Impressions": 1300, "Clicks": 120, "Cost": 65.0, "Conversions": 7, "ConversionValue": 350.0
      },
      {
        "Date": "2023-01-07", "CampaignName": "Campaign Beta", "AdGroupName": "AdGroup B2",
        "Impressions": 750, "Clicks": 60, "Cost": 30.0, "Conversions": 2, "ConversionValue": 100.0
      },
      {
        "Date": "2023-01-08", "CampaignName": "Campaign Alpha", "AdGroupName": "AdGroup A2",
        "Impressions": 1050, "Clicks": 90, "Cost": 58.0, "Conversions": 5, "ConversionValue": 280.0
      }
    ]
  }
  ```

- **Exemplo de Chamada com `curl`:**

  (Assumindo que o servidor está rodando na porta 5001 e o JSON acima está salvo em um arquivo `payload.json`)

  ```bash
  curl -X POST -H "Content-Type: application/json" --data @payload.json http://localhost:5001/api/v1/analyze/google-ads
  ```

- **Exemplo de Chamada com Python (usando a biblioteca `requests`):**

  Crie um arquivo `test_api_client.py` (fora da pasta `backend`, ou ajuste o path do payload) com o seguinte conteúdo:

  ```python
  import requests
  import json

  # URL do endpoint
  api_url = "http://localhost:5001/api/v1/analyze/google-ads"

  # Payload da requisição (o mesmo JSON do exemplo acima)
  payload = {
    "campaign_id": "test_campaign_001_py",
    "analysis_options": {
      "calculate_metrics": True,
      "identify_trends": {
        "enabled": True,
        "date_column": "Date",
        "metrics": ["Clicks", "CTR", "Cost"],
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
      {
        "Date": "2023-01-01", "CampaignName": "Campaign Alpha", "AdGroupName": "AdGroup A1",
        "Impressions": 1000, "Clicks": 100, "Cost": 50.0, "Conversions": 5, "ConversionValue": 250.0
      },
      {
        "Date": "2023-01-02", "CampaignName": "Campaign Alpha", "AdGroupName": "AdGroup A1",
        "Impressions": 1100, "Clicks": 110, "Cost": 55.0, "Conversions": 6, "ConversionValue": 300.0
      },
      { # Anomalia em Clicks para teste
        "Date": "2023-01-03", "CampaignName": "Campaign Beta", "AdGroupName": "AdGroup B1",
        "Impressions": 800, "Clicks": 300, "Cost": 40.0, "Conversions": 3, "ConversionValue": 150.0
      },
      {
        "Date": "2023-01-04", "CampaignName": "Campaign Alpha", "AdGroupName": "AdGroup A2",
        "Impressions": 1200, "Clicks": 150, "Cost": 60.0, "Conversions": 8, "ConversionValue": 400.0
      },
      {
        "Date": "2023-01-05", "CampaignName": "Campaign Beta", "AdGroupName": "AdGroup B1",
        "Impressions": 900, "Clicks": 80, "Cost": 45.0, "Conversions": 4, "ConversionValue": 200.0
      },
      {
        "Date": "2023-01-06", "CampaignName": "Campaign Alpha", "AdGroupName": "AdGroup A1",
        "Impressions": 1300, "Clicks": 120, "Cost": 65.0, "Conversions": 7, "ConversionValue": 350.0
      },
      {
        "Date": "2023-01-07", "CampaignName": "Campaign Beta", "AdGroupName": "AdGroup B2",
        "Impressions": 750, "Clicks": 60, "Cost": 30.0, "Conversions": 2, "ConversionValue": 100.0
      },
      {
        "Date": "2023-01-08", "CampaignName": "Campaign Alpha", "AdGroupName": "AdGroup A2",
        "Impressions": 1050, "Clicks": 90, "Cost": 58.0, "Conversions": 5, "ConversionValue": 280.0
      }
    ]
  }

  try:
      response = requests.post(api_url, json=payload)
      response.raise_for_status()  # Levanta um erro para códigos de status HTTP 4xx/5xx

      print("Status Code:", response.status_code)
      print("Response JSON:", json.dumps(response.json(), indent=2))

  except requests.exceptions.HTTPError as http_err:
      print(f"HTTP error occurred: {http_err}")
      print("Response Content:", response.text)
  except requests.exceptions.ConnectionError as conn_err:
      print(f"Connection error occurred: {conn_err}")
  except requests.exceptions.Timeout as timeout_err:
      print(f"Timeout error occurred: {timeout_err}")
  except requests.exceptions.RequestException as req_err:
      print(f"An error occurred: {req_err}")

  ```
