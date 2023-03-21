"use strict"
const { json } = require("express");
const express = require("express");
const router =express.Router();
const fs = require("fs");
const archivo = fs.readFileSync("pokemon.js");


router.post("/nuevo", (req, res)=>{
    req.body()
})


// let persona = {
//     nombre: "peter",
//     edad:17
// }
// let {nombre} = persona;
//  console.log(nombre)
// // para recoger un unico dato
//  let {nombre : n1} = persona;
//  console.log(n1);
//  // devuelve un id unico
//  const {v4: uuid} =  require("uuid");
//  let id = uuid();
//  console.log(id)

//  const {v4 : uuid} = require("uuid");
//  for(let i=0 ; i < 1000; i++){
//     console.log(uuid());
//  }

//como añadir algo a json
let dato =JSON.Stringify("cadena de texto")
fs.writeFileSync(archivo,dato)


              

      

