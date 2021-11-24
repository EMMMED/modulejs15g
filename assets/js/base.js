/*
	Ejercicio 1:
	Pedir 2 variables por prompt
	Si a > b dividir a entre b
	Si a < b sumar a más b
	si a == b multiplicar ambos numeros
	Imprimir el resultado en consola
*/

const number1 = parseInt(prompt("Introduce el valor de a"));
const number2 = parseInt(prompt("Introduce el valor de b"));

if(isNaN(number1) || isNaN(number2)){
    console.error("Error, favor de introducir un numero valido")
}else if(number1 > number2){
    console.log(number1 + " entre "+ number2 + " = ", number1/number2);
}else if(number1 < number2){
    console.log(number1 + " mas " + number2 + " = " , number1+number2);
}else{
    console.log(number1 + " multiplicado por  " + number2 + " = ", number1*number2);
}

/*
Tablas de todos los numeros del 1 al 10 
*/

for(let i = 1; i <= 10; i++){
    console.log(`Tabla del ${i}`)
    for(let j = 1 ; j <= 10; j++){
    console.log(`${i} * ${j} = ${i*j}`)
    }
}