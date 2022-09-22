import express from "express";
const app = express();
app.use(express.json());

//EXPOSING ROUTES FOR READING, PARSING AND SENDING RESPONSES FROM XML AND CSV
import routerA from "./routers/routerA.js";
app.use(routerA);

//EXPOSING ROUTES FOR READING, PARSING AND SENDING RESPONSES FROM TXT AND YAML
import routerB from "./routers/routerB.js";
app.use(routerB);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});