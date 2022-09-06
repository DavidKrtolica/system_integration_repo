from fastapi import FastAPI, Request, Response
import http

import requests

app = FastAPI()

@app.get("/")
def _():
    return {"Hello": "World"}

@app.get("/otherendpoint")
def _():
    return {"Endpoint": True }

@app.get("/mymessage")
def _():
    return {"Message": "This message comes from the Python server." }

@app.get("/items")
def _(page: int = 1):
    return { "page": page }

#MAKING AND CATCHING A WEB-HOOK
@app.post("/webhook")
async def _(request: Request, response: Response):
    body = await request.json()
    print(body)
    return { "message": "OK" }