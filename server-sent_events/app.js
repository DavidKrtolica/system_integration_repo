import express from "express";
const app = express();

app.use(express.static("public"));


app.get("/synchronizeTime", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    });
    setInterval(() => {
        res.write("date: " + new Date() + "\n\n");
    }, 1000);
});


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("App running on port", 8080);
    }
});