/////////////////////// TEXT FILE READER ///////////////////////////////

const fs = require('fs');

try {
    let data = fs.readFileSync('../text_file.txt', 'utf-8');
    console.log(data.toString());
} catch (e) {
    console.log('Error: ', e.stack);
}

/////////////////////// CSV FILE READER ///////////////////////////////

const csv = require('fast-csv');

fs.createReadStream('../csv_file.csv')
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => console.log(row));

/////////////////////// JSON FILE READER ///////////////////////////////

fs.readFile('../json_file.json', 'utf-8', function(err, data) {
    if(err) throw(err);
    console.log(JSON.parse(data));
});

/////////////////////// XML FILE READER ///////////////////////////////

const parser = require('xml-js');

fs.readFile('../xml_file.xml', 'utf-8', function(err, data) {
    if(err) throw(err);
    console.log(parser.xml2json(data, {compact: true, spaces: 2}));
});

/////////////////////// YAML FILE READER ///////////////////////////////

const yaml = require('js-yaml');

fs.readFile('../yaml_file.yaml', 'utf-8', function(err, data) {
    if(err) throw(err);
    console.log(yaml.load(data));
});