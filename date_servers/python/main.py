from fastapi import FastAPI, Request, Response
import datetime
import requests, json

app = FastAPI()


@app.get("/timestamp-python")
def _currentTimestamp():
    return { "currentTime": datetime.datetime.now() }

@app.get("/get-node-timestamp")
def _nodeTimestamp():
    r = requests.get("http://127.0.0.1:8080/timestamp-node")
    responseData = r.json()
    return { "nodeTimestamp": responseData }