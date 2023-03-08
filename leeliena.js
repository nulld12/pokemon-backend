" use strict"
const readline= require("readline");
const rl =readline.createInterface(
    process.stdin,
    process.stdout
)
/*
//Para pedir algo
rl.question("introdue algo", (introduccido)=>{
    console.log("has introducido", introducido)
})
*/
//Importante!!!!

main();

async function main(){
    console.log(2);
    let introducido= await leeLinea("introduce algo")
    let introducido2= await leeLinea("introduce otra cosa")
    console.log(introducido);
    console.log(introducido2);
    console.log(2)
}
function leeLinea(texto){
    return new Promise ((resolve, reject)=>{
        rl.question(texto, (introducido)=>{
            //console.log("has introducido", introducido)
            resolve (introducido)
        })    
    })
}