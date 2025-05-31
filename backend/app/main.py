from flask import Flask
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello from Flask Backend!"

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001)) # Default to 5001 if PORT not set
    app.run(debug=True, port=port)
