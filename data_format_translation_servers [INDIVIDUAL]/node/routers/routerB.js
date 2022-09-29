import Router from "express";
const routerB = Router();

import { readTxt, readYaml } from '../server_file_reader.js';

routerB.get("/read-txt", (req, res) => {
    res.send({ txtMessage: readTxt() });
});

routerB.get("/read-yaml", (req, res) => {
    res.send({ yamlMessage: readYaml() });
});

export default routerB;