const mostBigger = (arr) => {
    console.log(arr)
    let biggest = arr[0]
    arr.forEach( ( value, index, array ) => {
        if(biggest < value){
            biggest = value
        }
    })
    return biggest
}

const mostSmaller = (arr) => {
    console.log(arr)
    let smaller = arr[0]
    arr.forEach( ( value, index, array ) => {
        if(smaller > value){
            smaller = value
        }
    })
    return smaller
}

// arr.map()
// MAP MAP MAP MAP MAP MAP MAP MAP

// let resultado = [1,2,3,4,5].map( (val, index, arr) => {
//     let newVal = val * 2
//     return newVal
// })

// console.log(resultado)




// const stringNum = [1,2,3,4,5].map( ( val, index, arr) => {
//     let stringNumConverted = val.toString()
//     return stringNumConverted
// })


// const stringNum = ( arr ) => arr.map( ( val ) =>  val.toString() )

// let nombreVar = stringNum([3,2,1,4])
// console.log(nombreVar)



// .map()
// función
// Dado unn array como parametro 
// capitalizar todos los elementos que sean strings
// typeof variable
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo', 123]


const capitalizerArr = (arr) => {

    let arrCapitalized = []

    arrCapitalized = arr.map( element => {
        if(typeof element === 'string'){
            let stringCap = `${element.slice(0,1).toUpperCase()}${element.slice(1).toLowerCase()}`
            return stringCap
        } else {
            return element
        }
    })

    return arrCapitalized
}

let resultCap = capitalizerArr(['hOlA', 'mundo', 123])
console.log(resultCap)



// arr.filter()

const arrayCitys = ['ciudad', 'cdmx', 'monterrey', 'guadalajara']

// arrayCitys.filter( function() {

// })

let resultFilter = arrayCitys.filter( ( cv, index, arr) => {
    if(cv.slice(0,1) === 'c')
        return cv
})

console.log(resultFilter)
