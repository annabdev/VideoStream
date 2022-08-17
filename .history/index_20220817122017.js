const express = require('express');
const app = express();
const fs = require("fs");


app.get("/", function (req, res) {
    res.sendFile(__dirname + "index.html");
});

app.get("/video", function (req, res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range Header");
    }
    const videoPath = "IMG_0373.MOV";
    const videoSize = fs.statSync("IMG_0373.MOV").size;
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));
+ )
});

app.listen(8000, function () {
    console.log("listening to port 8000!");
});