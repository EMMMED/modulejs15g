// Tarea 1

// Pedir al usuario una palabra (permitir espacios)
// Verificar si la palabra es un palidromo
// Mandar en consolo el resultado 


let word = prompt("Introduce una palabra para descubrir si es o no un palindromo").toLowerCase().trim()
let wordNoSpaces = word.replace(/ /g, "")
let wordReversed = ""

for(let i = wordNoSpaces.length-1; i>=0; i--){
    wordReversed += wordNoSpaces[i]
}
    
if(wordReversed === wordNoSpaces){
    console.log(`La palabra ${word} es un palindromo`)
}else{
    console.log(`La palabra ${word} no es un palindromo`)
}

    console.log(wordNoSpaces)
    console.log(wordReversed)



// Tarea 2

// Pedir al usuario un numero entre 1 y 100
// sumar todos los numeros entre el 1 y el numero que nos dio el usuario
// Mandar un alert con el total 

let num2 = parseInt(prompt("introduce un numero entre 1 y 100"))
let suma = 0

for(let i = 0; i<=num2; i++){
suma = suma + i
}
alert(`La suma es = ${suma}`)

