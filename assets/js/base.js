/*
	Ejercicio 1:
	Pedir 2 variables por prompt
	Si a > b dividir a entre b
	Si a < b sumar a más b
	si a == b multiplicar ambos numeros
	Imprimir el resultado en consola
*/

let number1 = parseInt(prompt("Introduce el valor de a"));
let number2 = parseInt(prompt("Introduce el valor de b"));

if(isNaN(number1) || isNaN(number2)){
    console.log("Error, favor de introducir un numero valido")
}else if(number1 > number2){
    console.log(number1 + " entre "+ number2 + " = ", number1/number2)
}else if(number1 < number2){
    console.log(number1 + " mas " + number2 + " = " , number1+number2)
}else{
    console.log(number1 + " multiplicado por  " + number2 + " = ", number1*number2)
}