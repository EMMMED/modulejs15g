// Object.keys(obj)
let salarios  = {
    'jorge':  3000,
    'juan':  3000,
    'Pedro':  3000
}

// funcion
const sumaSalarios = (obj) => {
    let suma = 0
    Object.keys(obj).forEach( ( key, index, arr) => {
        let salario = obj[key]
        suma += salario
    })
    return suma
}


const reduceSalarios = (obj) => {
    let sumatoria = Object.values(obj).reduce( (acc, cv) => {
        return acc + cv
    },0) 
    return sumatoria
}

reduceSalarios(salarios)

sumaSalarios(salarios)

// let total = Object.keys(salarios).reduce( (acc, key) => acc += salarios[key], 0)

// const totalSalarios = () => {
//     return arrPersons.reduce( (acc, person) => {
//         return person.voted == true ? acc + 1: acc
//     }, 0)
// } 


// recibe un objeto
// retornar el total de los salarios

// hint : reduce
// hint : forEach


//ASIGN()
//Concatena objetos
let obj1 = {
    nombre : "Emilio"
}

let obj2 = {
    apellido: "Medina"
}

let nombreCompleto = Object.assign(obj1, obj2)
console.log(nombreCompleto)

// ----------------------------------------------------------
// ENTRIES()
// Devuleve un array de arrays 

console.log(Object.entries(obj1))

// 2) [Array(2), Array(2)]
// 0: Array(2)
// 0: "nombre"
// 1: "Emilio"
// length: 2
// [[Prototype]]: Array(0)
// 1: (2) ['apellido', 'Medina']
// length: 2
// [[Prototype]]: Array(0)

// ----------------------------------------------------------
//FREEZE()
// BLOQUEA EL OBJETO
// DESPUES DE UN FREEZE, NO SE PUEDE MODIFICAR, NI AGREGAR NI ELIMINAR NADA DEL OBJETO


// ----------------------------------------------------------
// destructuración de arrays

let newArr = [10,20,30,40,50]

let [primerValor, segundoValor, tercerValor] = newArr
console.log(primerValor, segundoValor, tercerValor)

//----------------------------------------------------------
// SpreadOperator 

let [a,b, ...rest] = [10,20,30,40,50]
console.log(a)
console.log(b)
console.log(...rest)

let [firstName, lastName] = ['jorge', 'luis']
console.log(firstName, lastName)

// MAS EJEMPLOS

const arr1 = ['one', 'two']
const arr2 = [...arr1, 'three', 'four', 'five']
console.log(arr2)

let objSpread1= {
    propiedad: 'valor1',
    age: 23
}
let objSpread2 = {
    propiedad2: 'valor2',
    ...objSpread1
}

console.log(objSpread2)



// ---------------------------------------------------------
// destructuración de arrays

const hero = {
    name: 'Batman',
    realName : 'Bruce Wayne'
}

const { name: HeroName, realName } = hero
console.log(name, realName)

// EJEMPLOS

let destrucArr = [
    ['juan','perez'],
    ['Clhoe', 'Alnaji']
]

// destrucArr.forEach( (value) => {
//     console.log(value)
//     let [nombre, apellido] = value+
//     console.log(`${nombre}, ${apellido}`)
// })

