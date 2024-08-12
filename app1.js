
const readline = require('readline')

const rl= readline.createInterface({
    input: process.stdin, //define la entrada que será por el teclado
    output: process.stdout //define la salida que será por consola
})

function celsiusF(celsius){
    return(celsius *9/5) +32;
}

rl.question('Ingrese la temperatura en grados Celsius:',(respuesta) =>{
    const Celsius= parseFloat(respuesta);
    const fahrenheit = celsiusF(Celsius);
    console.log(`${Celsius}°C es igual a ${fahrenheit}°F`);
    rl.close();
},)