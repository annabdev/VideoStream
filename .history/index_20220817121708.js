const express = require('express');
const app = express();
const fs = require("fs");
const videoPath = "IMG_0373.MOV"


app.get("/", function (req, res) {
    res.sendFile(__dirname + "index.html");
});

app.listen(8000, function () {
    console.log("listening to port 8000!");
});

app.get("/video", function (req, res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range Header");
    }
});