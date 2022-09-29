import fs from 'fs';
import csv from 'fast-csv';
import parser from 'xml-js';
import yaml from 'js-yaml';

/////////////////////// TEXT FILE READER ///////////////////////////////

export function readTxt() {  
    try {
        let data = fs.readFileSync('./text_file.txt', 'utf-8');
        return data;
    } catch (e) {
        return 'Error: '+e.stack;
    }
}

/////////////////////// CSV FILE READER ///////////////////////////////

export function readCsv(res) { 
    fs.createReadStream('./csv_file.csv')
        .pipe(csv.parse({ headers: true }))
        .on('error', error => console.log(error))
        .on('data', (data) => {
            res.send({ csvMessage: data });  
    });
}
    
/////////////////////// JSON FILE READER ///////////////////////////////

export function readJson() {
    fs.readFile('./json_file.json', 'utf-8', function(err, data) {
        if(err) throw(err);
        return JSON.parse(data);
    });
}

/////////////////////// XML FILE READER ///////////////////////////////

export function readXml() {
    let output = fs.readFileSync('./xml_file.xml', 'utf-8', function(err, data) {
        if(err) throw(err);
        return data;
    });
    return parser.xml2js(output, {compact: true, spaces: 2});
}

/////////////////////// YAML FILE READER ///////////////////////////////

export function readYaml() {
    let output = fs.readFileSync('./yaml_file.yaml', 'utf-8', function(err, data) {
        if(err) throw(err);
        return data;   
    });
    return yaml.load(output);
}