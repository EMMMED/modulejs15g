// //  SIntaxis de REduce 

// let acumulador = 0
// let arr = [1,2,3]

// let suma = arr.reduce((acc, cv, index, arr) => {
//     console.log(acc, cv)
//     return acc + cv
// }, 0)


// const getFullName = (fullName) => {
//     let iniciales = ""
//     iniciales = fullName.reduce( (acc, cv) =>{
//         return acc + cv.slice(0,1)
//     },"Mis iniciales son : ")
//     return iniciales
// }

//EJERCICIO INICIALES EN UNA SOLA LINEA

const getFullName = (fullName) => {
    return fullName.reduce( (acc, cv) =>acc + cv.slice(0,1),"Mis iniciales son : ")
}

getFullName(["Emilio", "Medina", "Pineda"])