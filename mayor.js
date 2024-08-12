
const { parse } = require('path');
const readline = require('readline')

const rl= readline.createInterface({
    input: process.stdin, //define la entrada que será por el teclado
    output: process.stdout //define la salida que será por consola
})

function maximoDeTres(n1,n2,n3){
    return Math.max(n1,n2,n3);
}

rl.question('Ingrese el primer número:',(respuesta1)=>{
    rl.question('Ingrese el segundo número:',(respuesta2)=>{
        rl.question('Ingrese el tercer número:',(respuesta3)=>{
            const num1 =parseFloat(respuesta1);
            const num2 =parseFloat(respuesta2);
            const num3 =parseFloat(respuesta3);

            //Llamando a la función
            const maximo = maximoDeTres(num1,num2,num3);
            //Salida de la información
            console.log(`El número mayor entre ${num1}, ${num2} y $(num3) es ${maximo}`)
            rl.close();

        })
    })
})