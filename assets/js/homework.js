/**
 * Escribir un arrow function que invierta una oracion
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * hint: https://www.w3schools.com/jsref/jsref_join.asp
 */

const word = prompt("Introduce una frase")

const wordReverse = word =>{
    let wordReversed = ""
    for(i = word.length -1; i >= 0; i--){
        wordReversed = wordReversed + word[i]
    }
    console.log(wordReversed)
}


/**
 * Escribir un arrow function que compruebe
 * si una oración es un palindromo
 * hint: https://ricardometring.com/javascript-replace-special-characters
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */


const palindrome = (pal= 'Isáac no ronca así') => {
    let normal = pal.normalize('NFD').replace(/[\u300-\u036f]/g,'').toLowerCase().replace(/([^\w]\s+)/g,'')
    let wr = normal.split('').reverse().join('')
    return normal == wr ? true :false
}


/**
 * Escribir un arrow function que tome como parametro 2 arrays, 
 * y devuelva un numero con la suma total de esos 2 arrays.
 * arrayReduce( [1,2,3,4], [1,2]) 
 * -> 13
 * 
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * 
*/


const arrayReduce = (arrOne, arrTwo) => {
    let newArr = arrOne.concat(arrTwo)
    let arrAdd = 0

    newArr.forEach( ( item ) => {
            arrAdd += item
    })
    return arrAdd
}



/**
 * Escribir una función que tome como parametro 2 arrays, y devuelva un array 
 * con los numeros repetidos en los 2 arrays
 * arrayReduce([1,2,3,4],[1,2,5]). 
 * -> [1,2]
*/
