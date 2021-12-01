/* 
Metodos de ARRAYS
.length
.push agrega un dato al final de un array
.pop elimina el ultimo item y te lo regresa como respuesta

*/

console.log('arrays')

let arr = [2, 'hola',4]
let newArray = []

console.log(arr)
arr.push(10)
console.log(arr)

    for(i = arr.length -1 ; i >= 0; i--){
        newArray.push(arr[i])
    }

console.log(arr.reverse())


let palabra = "palabra"

let palabraReverse = palabra.split("")

console.log(palabraReverse.reverse().join(""))


let sumaArray = 0 