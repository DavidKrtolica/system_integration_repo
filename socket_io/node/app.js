import express from "express";
import http from "http"
const app = express();
const server = http.createServer(app);

app.use(express.static("public"));

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("ping", (data) => {
        socket.emit("pong", data);
    });
    socket.on("submitted-name", (data) => {
        io.emit("nameChange", {name: data.name});
    });
});

server.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("App running on port", 8080);
    }
});