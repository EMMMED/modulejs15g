let saludo ='hola'

for( i=0 ; i<= saludo.length; i++){
    console.log(saludo[i])
}

/*
Pedir al usuario un STRING
Contar las Vocales
Imprimir en consla el numero de vocales y consonantes
2 vocales y 2 consonantes
*/

let word = prompt("Introduce una palabra u oración").toLowerCase()
let vocalCount = 0;

for(i=0 ; i<=word.length; i++){
    if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u"){
        vocalCount = vocalCount +1
    }
    
}
console.log(`La palabra ${word} tiene ${vocalCount} vocales y ${word.length - vocalCount} consonantes`)





// EJERCICIO #1

let word = prompt("Introduce una palabra u oración").toLowerCase()
let vocalCount = 0;
let spaces = 0;

while(word.length <= 0){
   word = prompt("Introduce una palabra u oración valida").toLowerCase()
}


for(i=0; i<=word.length; i++){
    if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u"){
        vocalCount = vocalCount + 1
    }else if (word[i] == " "){
        spaces = spaces + 1
    }else{
    }
}
console.log(`La palabra ${word} tiene ${vocalCount} vocales y ${word.length - vocalCount - spaces} consonantes`)





/* 
EJERCICIO #2
Pedir una palabra con espacio al inicio y al final 
Contar las letras a y e
Contar numero de espacios, sin contar los esapcios al inicio y al final
*/

let wordSpace = prompt("Introduce una palabra u oración con un espacio inicial y final").toLowerCase().trim()
let betweenSpaces = 0, vocalEA = 0

while(wordSpace.length <= 0){
   wordSpace = prompt("Introduce una palabra u oración valida").toLowerCase()
}

 for(let i = 0; i <= wordSpace.length; i++){
     if(wordSpace[i] == "a"|| wordSpace[i] == "á" || wordSpace[i] == "e" || wordSpace[i] == "é" ){
        vocalEA = vocalEA + 1
     }else if(wordSpace[i] == " "){
         betweenSpaces = betweenSpaces + 1
     }else{
     }
 }
 console.log(`La palabra ${wordSpace} tiene ${betweenSpaces} spacios internos y ${vocalEA} vocales e y a `)