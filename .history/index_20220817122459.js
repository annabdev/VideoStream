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
    const end = Math.min(start + CHUNK_SIZE, videoSize -1);
    const contentLength = end - start + 1;
    const headers ={
    "Content-Range": {`${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    

    }
});

app.listen(8000, function () {
    console.log("listening to port 8000!");
});