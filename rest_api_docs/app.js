import express from "express";
const app = express();

import router from "./routers/users.js";
app.use(router);

import swaggerJSDoc from "swagger-jsdoc";
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'Users API',
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