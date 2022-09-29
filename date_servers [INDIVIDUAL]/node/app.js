import express, { json } from "express";
import fetch from "node-fetch";
const app = express();


app.get("/timestamp-node", (req, res) => {
    res.send({ currentTime: new Date() });
});

app.get("/get-python-timestamp", (req, res) => {
    fetch("http://127.0.0.1:8000/timestamp-python")
    .then(res => res.json())
    .then(json => {
        res.send({ pythonTimestamp: json });
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});