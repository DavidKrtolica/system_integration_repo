import Router, { response } from "express";
const routerA = Router();

import { readXml, readCsv } from '../server_file_reader.js';

routerA.get("/read-xml", (req, res) => {
    res.send({ xmlMessage: readXml() });
});

routerA.get("/read-csv", (req, res) => {
    //res.send({ csvMessage: readCsv() })
    readCsv(res);
});

export default routerA;