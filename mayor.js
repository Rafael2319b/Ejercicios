
const readline = require('readline')

const rl= readline.createInterface({
    input: process.stdin, //define la entrada que será por el teclado
    output: process.stdout //define la salida que será por consola
})

function maximoDeTres(n1,n2,n3){
    return Math.max(n1,n2,n3);
}

rl.question('Ingrese el primer número:',(respuesta1)=>{
    rl.question('Ingrese el número:',(respuesta2)=>{
        
    })
})