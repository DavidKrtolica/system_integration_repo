import express from "express";
const app = express();
app.use(express.json());

import plantRouter from "./routers/plants.js";
app.use(plantRouter);

import swaggerJSDoc from "swagger-jsdoc";
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'Plants API',
        version: '0.0.1',
        },
    },
    apis: ['./routers/*.js']
}; 
const openapiSpecification = swaggerJSDoc(options);

import swaggerUI from "swagger-ui-express";
app.use("/docs", swaggerUI.serve, swaggerUI.setup(openapiSpecification));

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("App running on port", 8080);
    }
});