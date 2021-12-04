// //TAREA HW

// // 1. Generar una function
// // que reciba un array como parametro
// // y devuelva solo los items que son pares
// // p.ej. onlyEvenValues( [1, 2, 3, 4] )
// // -> [2, 4]
// // Aplicar el metodo .forEach()
// // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push


// const onlyEvenValues = arrNumbers => {
//     let arrayToFill = []

//     arrNumbers.forEach(item => {
//         if(item % 2 === 0){
//             arrayToFill.push(item)
//         }
//     })
//     console.log(arrayToFill)
// }

// onlyEvenValues([1,2,3,4,5,6])



// // 2. function que reciba como parametro una array de strings
// // y devuelva la primer y ultima letra del string
// // de cada uno de los items del array 
// // -> firstAndLast (['hola', 'mundo'] )
// // -> ['ha', 'mo']
// // .forEach() o .map()

// const firstAndLast = arrStrings => {
//     let arrayFill = []
//     arrStrings.map( ( item ) =>{
//         arrayFill.push(item.slice(0,1) + item.slice(-1))
//     })
//     return console.log(arrayFill)
// }

// firstAndLast(["Emilio" , "Medina", "Pineda"])


// /**
//  * 3. Funcion que reciba un array de numeros
//  * y devuelva el promedio
//  * -> getAverage( [10, 8, 9, 7] )
//  * -> 8.5
//  */

//  const getAverage = (arr) => {
//     let sumatoria = 0
//     arr.forEach( (item) => sumatoria += parseInt(item))
//     return console.log(sumatoria / arr.length)
// }

// getAverage([10, 10, 10,])


//  4. funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// convertLeapYear( [1990, 2000, 2001, 2020] )
// -> [2000,2020]
// .forEach()
// hint: https://docs.microsoft.com/es-es/office/troubleshoot/excel/determine-a-leap-year


// const convertLeapYear = arr => {
//     let arrYearsFiltered = []

//     arrYearsFiltered = arr.filter(year => {
//         if( (year % 4 === 0 && year % 100 !== 0 ) || (year % 100 === 0 && year % 400 === 0) ){
//             return year
//         }
//     })

//     return arrYearsFiltered
// }


//  EJERCICIO 
//  MAP

// const capitalizer = arrStrings => {
//     let capArrays = [], primera = "", ultima = ""
//     capArrays = arrStrings.map( ( item ) =>{
//         primera = item.slice(0,1).toUpperCase() 
//         ultima = item.slice(1).toLowerCase()
//         return primera + ultima
//     })
//     return capArrays
// }

// capitalizer(["EMIlio" , "MeDIna", "PIneda"])


// // FILTER 

// // let arrToFilter = [1,2,3,4,5,6,7]
// // let arrFiltered = arrToFilter.filter( (item) => item % 2 === 0)
// // console.log(arrFiltered)

// // 
// /*
// ["Hola", "mundo", 0, 5]
// 1. funcion
// 2. Filtrar solo los de tipo String
//  */


// // EJERCICIO FILTER 

// let arrToFilter = ["Hola", "mundo", 0, 5, true, "Koders"]
// // let arrFiltered = arrToFilter.filter( (item) => 
// // {typeof item == 'string'})
// let arrFiltered = arrToFilter.filter( item => typeof item == 'string')
// console.log(arrFiltered)

// //  SIntaxis de REduce 

// let acumulador = 0
// let arr = [1,2,3]

// let suma = arr.reduce((acc, cv, index, arr) => {
//     console.log(acc, cv)
//     return acc + cv
// }, 0)





/**
 * arr.forEach()
 * Dado el siguiente array 
 * ['string','value','min','asdfghjk']
 * Hacer una funcion que devuelva el string con mas caracteres
 * 
 */

//  const mostLarge  = (arr) => {
//     let longest = [arr[0]]
//     arr.forEach(  element => {
//         if(element.length > longest.length){
//             longest = element
//             console.log(longest)
//         }return console.log(longest)
//     });
// }

const mostLarge  = (arr) => {
    let longest = [arr[0]]
    arr.forEach(  ( element ) => { if( element.length > longest.length ) {
        longest = element
        }
    })
    return longest
}


let palabras = (["string", "value", "min","asdasdas" ,"asdñlkasdñlk", "asdfghjk"])
mostLarge(palabras)

/**
 * arr.map()
 * Dado un array 
 * Hacer una funcion que devuelva el mismo array
 * Pero con los items al reves
 * P.ej. reverseStringArr( ['string','value','min'] )
 * Salida: ['gnirts','eulav','nim']
 * 
 */


// const reverseStringArr  = (arr) => {
//     let reversed = []
//     arr.map( ( val ) => {
//         reversed.push((val.split("").reverse().join("")))
//     })
//     return reversed
// }

// const reverseStringArr  = (arr) => {
//     let newStrings = []
//     arr.map( ( val ) => {
//         newStrings.push((val.split("").reverse().join("")))
//     })
//     return newStrings
// }


const reverseStringArr  = (arr) => {
    arr.map( ( val ) => {
        return console.log(val.split("").reverse().join(""))
    })
}

reverseStringArr(palabras)



/**
 * arr.filter(), .map()
 * Funcion que reciba un array de strings y numeros
 * Filtre solo los strings
 * luego, Capitalice cada string
 * luego, filtre solo los que tengan mas de 5 caracteres
 * y al final, los que tengan al menos 2 letras "a" 
 * 
 * p.ej.  filterStrings( ['guadalajara', 3, 'caracas', 'Oslo', 'brasil', 0] )
 * Salida -> ['Guadalajara', 'Caracas']
 */

// const filterStrings  = (arr) => {
    
// }
