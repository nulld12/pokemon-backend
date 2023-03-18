"use strict"
const express = require("express");
const router =express.Router();
const fs = require("fs");
const archivo = fs.readFileSync("pokemon.js");
const combates = [];


function middleWare(req, res, next) {
    console.log(req.combates);
    console.log("estoy en el middleware");
    next();
}
router.get("/lista", (req, res)=>{
    console.log(req.query);
    res.send(JSON.parse(archivo[nombre]))
 
})
router.post("/nuevo", (req, res)=>{
    let nuevo= (req.body);
    console.log(nuevo);
    if(nuevo[nombre]){
        console.log("nombre añadido");
    }
    if(nuevo[tipo]) {
        console.log("tipo añadido");
    }
    if(nuevo[vida]){
        console.log("vida añadida");
    }
    if(nuevo[defensa]){
        console.log("defensa añadida");
    }
    if(nuevo[ataque]){
        console.log("ataque añadido");
    }
    else {
        res.status(400).send("faltan datos necesarios")
    }
    res.status(200).send("status:","ok");
    
    
})

module.exports =router;