// // TAREA ¿Qué es un Callback?
// // Es una funcion que se da como parametro para otra función

// // Principales Eventos del mouse
// // focus, focusin, focusout,
// // Mouseenter mouseleave, mousemove
// // click, rightclick, dblclick

// //Principales eventos del teclado 
// // Keydown, keypress, keyup
// // focus

// // Prncipales eventos del navegador.
// // load, beforeload


// // addEventListener(type, listener, option)
// const saludo = () => {
//     console.log('Saludos addEventListener')
// }

// let eventButton = document.getElementById('#button__eventListener')

// // OPCION 1 eventButton.addEventListener('clic', saludo)
// // OPCION 2
// eventButton.addEventListener('clic', () => {
//     console.log('Saludos addEventListener')
// })


// // Add Evenet
// // eventButton.addEventListener('click', saludo )

// // Other event
// document.getElementById('button__eventListener').addEventListener('focues', () => {
//     console.log('saludo de event listener')
// })

// // Agregar 5 koders más
// // puntarlos en el DOM
// 1. Utilizar Bootstrap
// 2. Qué sea responsive 
// 3. Mínimo 3 cards por row

let koders = [
    {
        name: 'Emilio',
        age: 30,
        city: 'Guadalajara',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar : 'https://i.pravatar.cc/300'
    },
    {
        name: 'Sara',
        age: 32,
        city: 'Guanajuato',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar : 'https://i.pravatar.cc/301'
    },
    {
        name: 'Juan',
        age: 33,
        city: 'Lima',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar : 'https://i.pravatar.cc/302'
    },
    {
        name: 'Brisset',
        age: 30,
        city: 'Monterrey',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar : 'https://i.pravatar.cc/303'
    },
    {
        name: 'Pedro',
        age: 30,
        city: 'Zacatecas',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar : 'https://i.pravatar.cc/304'
    },
    {
        name: 'Luz',
        age: 30,
        city: 'Monterrey',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar : 'https://i.pravatar.cc/305'
    },
    {
        name: 'Eduardo',
        age: 30,
        city: 'CDMX',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar : 'https://i.pravatar.cc/306'
    },
    {
        name: 'Charles',
        age: 30,
        city: 'Queretaro',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar : 'https://i.pravatar.cc/307'
    }
    
]


const fillKoder = () => {

    let cardsFill = ''
     koders.forEach( (koder) => {
         cardsFill += `
         <div class="col-3 rounded-3 m-2">
         <div class="card" style="width: 18rem;">
             <img src="${koder.avatar}" class="card-img-top rounded-circle" alt="...">
             <div class="card-body">
               <h5 class="nameKoder">Nombre: ${koder.name}</h5>
               <p class="ageKoder">Edad : ${koder.age}</p>
               <p class="cityKoderr">Ciudad : ${koder.city}</p>
               <p class="generacionKoder"> Generación : ${koder.generacion}</p>
               <p class="genderKoder">Género : ${koder.gender}</p>
             </div>
           </div>
     </div>
         `
     })
      // agrego el layout
      document.querySelector('#containerKoder').innerHTML = cardsFill
}

// document.getElementById('printKoders').addEventListener( 'click', fillKoder() )
// document.getElementById('printKoders').addEventListener( 'load', fillKoder() )

window.onload = function(){
    fillKoder()
}