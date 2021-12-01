// // Funcion con parametros

// function suma (a,b) {
//     console.log(`la suma de ${a} más ${b} es igual a ${a+b}`)
// }

// suma(10, 20)

// //Funcion sin parametros

// function multiplicar () {
//     console.log(2 * 2)
// }

// multiplicar()

// function toCelsius(fahrenheit) {
//     let celsiusGrades = ( ( 5 / 9 ) * ( fahrenheit -32 ) )

//     return
// }

// let celsiusGradesReturned = toCelsius(10)

// console.log(celsiusGradesReturned)


//Funcion que pude el nombre y lo imprime en consola


// function nameConsole(nameFunction){
//     console.log(nameFunction)
// }


// const superName = prompt("Introduce tu nombre")

// nameConsole(superName)

// let nameReversed = ""


// function reversed(nameToReverse){
//     let newWord = ""
//     for(let i = nameToReverse.length - 1; i <= 0; i --){
//         newWord += nameToReverse[i]
//     }return newWord

// }

// reversed(superName)


// FUNCTION 1 
// --------------------------------------------------------------------

function tablas(){
    for(i = 0; i<= 10 ; i++){
        console.log(`Tabla del ${i}`)
        for(j = 0; j <= 10 ; j ++){
            console.log(`${i} * ${j} = ${i*j}`)
        }
    }
}

tablas()

//FUNCTION 2
// --------------------------------------------------------------------

function sumaN (newNum){
    let resultado = 0
    for(i = 0; i <= newNum; i++){
        resultado = resultado + i
    }
    return console.log(`la suma total de los numeros del 0 al ${newNum} esigual a ${resultado}`)
}

sumaN(55)


//FUNCTION 4
// --------------------------------------------------------------------

function sumaDigitos(cantidad){
    for(i = 0; i < cantidad.length; i++){
        sumatoria +=  parseInt(cantidad[i])
    }return console.log(`la suma de los valores de ${digitos} es igual a  ${sumatoria}`)
}

let digitos = prompt("introduce una cantidad")
let sumatoria = 0

sumaDigitos(digitos)


// FUNCTION 5
// --------------------------------------------------------------------
function sumaMultiplos(){
    let multiplos = 0
    for (i = 100; i >= 1; i--){
        if(i % 3 === 0 && i % 5 === 0 ){
            multiplos = multiplos + i        
        }
    }
    return console.log(`La suma total de los multiplos es ${multiplos}`)
}

sumaMultiplos()

// --------------------------------------------------------------------

//Parametros por Default

/*
funtcion sunNumbers(a, b, c = 5){
    let suma = a +b +c
    }return suma

sumNumbers(10, 15)

Investigar las Arrow Functions hola()=>{}
*/
