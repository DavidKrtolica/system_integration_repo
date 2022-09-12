################# TXT FILE READER ###################

with open('../text_file.txt') as f:
        lines = f.read()
        print(lines)

################# CSV FILE READER ###################

import csv

with open('../csv_file.csv') as csv_file:
    reader = csv.reader(csv_file)

    for row in reader:
        print(row)
    csv_file.close()

################# JSON FILE READER ###################

import json

with open('../json_file.json', 'r') as json_content:
    print(json.load(json_content))

################# XML FILE READER ###################

import xml.etree.ElementTree as ET

root = ET.parse('..\\xml_file.xml').getroot()
print(root[0].text)

################# YAML FILE READER ###################

import yaml 

with open('../yaml_file.yaml') as yaml_file:
    print(yaml.safe_load(yaml_file))