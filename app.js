"use strict"
const express= require("express");
const app = express();
const cors= require("cors");
const fs = require("fs");

const port = 3000;
const combates = [];

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.use((req, res, next) => {
    console.log("Estoy en el middelware")
    req.combates = combates;
    next();
})

app.use("/pokemon", require("./pokemon"));

app.use("/combates", require("./combate"));

app, use((req, res, next) => {
    res.status(404).send("404 not found");
    next();
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(400).send(err.message);
    next();
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));