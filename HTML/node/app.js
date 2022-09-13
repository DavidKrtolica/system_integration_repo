import express from "express";
const app = express();

app.get("/message", (req, res) => {
    res.send({ message: "Hello from Express!" });
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("App running on port", 8080);
    }
});