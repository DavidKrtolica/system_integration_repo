import requests
import json
import datetime


webhook_url = "http://localhost:8000/webhook"

data = {
    "desc": "Some data...",
    "time": datetime.datetime.now().isoformat()
}

response = requests.post(   webhook_url, 
                            json=json.dumps(data), 
                            headers={"Content-Type": "application/json"}
)

print(response.content)