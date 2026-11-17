// const express = require("express");

// const app = express();

// app.get("/data", (req, res) => {
//     const buffer = Buffer.from("Hello Backend");

//     res.send(buffer);
// });

// app.listen(2000);
import express from "express";
import fs from "fs/promises";

const app = express();

app.get("/image", async (req, res) => {
    const image = await fs.readFile("C:\\Users\\Admin\\Pictures\\Screenshots\\c.png");

    res.setHeader("Content-Type", "image/png");

    res.send(image);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:5000");
});