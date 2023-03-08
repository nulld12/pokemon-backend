"use strict"
const express = require("express");
const router =express.Router();
const archivo = fs.readFileSync("./pokemon.json");
const fs = require("fs");

router.get("/lista", (req, res)=>{
    console.log(req.query);
    res.send(JSON.parse(archivo[nombre]))

})
router.post("/nuevo", (req, res)=>{
    let nuevo= (req.body);
    console.log(nuevo);
    if(nuevo[nombre] == nombre){
            

    }
    res.status(200).send("status:","ok");
})

module.exports =router;