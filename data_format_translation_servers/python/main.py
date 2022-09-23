from fastapi import FastAPI, Request, Response
import http, csv, json, yaml
import xml.etree.ElementTree as ET

app = FastAPI()


@app.get("/read-txt")
def _readTxtEndpoint():
    with open('./text_file.txt') as f:
        lines = f.read()
    return {"resultSet": lines}

@app.get("/read-csv")
def _readCsvEndpoint():
    with open('./csv_file.csv') as csv_file:
        list = []
        reader = csv.reader(csv_file)
        for row in reader:
            list.append(row)
        csv_file.close()
    keys = list[0]
    values = list[1]
    myDict = {k: v for k, v in zip(keys, values)}
    return {"resultSet": myDict}

@app.get("/read-yaml")
def _readYamlEndpoint():
    with open('./yaml_file.yaml') as yaml_file:
        output = yaml.safe_load(yaml_file)
    return {"resultSet": output}

@app.get("/read-xml")
def _readXmlEndpoint():
    root = ET.parse('./xml_file.xml').getroot()
    output = root[0].text
    return {"resultSet": output}