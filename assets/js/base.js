//  //  Create Elements
//  let ulElement = document.createElement('ul')
//  ulElement.textContent = "Dom Manipulation"

//  let liFirst = document.createElement('li')
//  liFirst.textContent = "HOTELES "

//  let liSecond = document.createElement('li')
//  liSecond.textContent = "OFERTAS"

//  let liThird = document.createElement('li')
//  liThird.textContent = "VIAJES"

//  let liFour = document.createElement('li')
//  liFour.textContent = "AYUDA"

//  let liFive = document.createElement('li')
//  liFive.textContent = "CANCELACIONES"

//  //  Append Elements
//  ulElement.appendChild(liFirst)
//  ulElement.appendChild(liSecond)
//  ulElement.appendChild(liThird)
//  ulElement.appendChild(liFour)
//  ulElement.appendChild(liFive)
//  document.getElementsByTagName('body')[0].appendChild(ulElement)

//  // Add Class Ul
//  ulElement.classList.add("menu__booking")
//  ulElement.setAttribute('id', "menu__booking")

//  //  Add Class Li
//  liFirst.classList.add("menu__booking__item")
//  liSecond.classList.add("menu__booking__item")
//  liThird.classList.add("menu__booking__item")
//  liFour.classList.add("menu__booking__item")
//  liFive.classList.add("menu__booking__item")

//-------------------------------------------------------------

// let menuContainer = document.createElement('ul')
// menuContainer.classList.add('menu__booking')
// menuContainer.setAttribute('id', 'menu__booking')

// let arrMenu = ['hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']
// let markupMenu = ''
// arrMenu.forEach( (menu) => {
//     markupMenu += `
//     <li class="menu__booking__item">${menu}</li>
//     `
// })

// document.querySelector('body').innerHTML = markupMenu


// //----------------------------------------------------------------


// let menu = document.getElementById('li')
// let liElement = document.createElement('li')
// liElement.textContent = 'menu insertado'
//  menu.insertBefore(liElement, menu.chilNoder[0]);


// ---------------------------------------------------------------

// Escuchar EVENTOS

//EJERCICIO #1 Reverse Name

    let nombre = document.getElementById('username').value
    console.log(nombre)
    let reversed = nombre.split('').reverse().join('')
    console.log(reversed)

    const reverseUser = (revesed) =>{
        document.getElementById('usernamereversed').value = reversed
    }

// EJERCICIO #2 Ciudades filter Con Array


let cities = ['colima', 'colombia','Estado de mexico']

const filterCity = () => {
    // filtrar ciudades
    let citySearch = document.querySelector('#name__city').value
    let citiesFiltered = cities.filter( (city) => {
        if(city.includes(citySearch) === true){
            return city
        }
    })

    // creo el layout con las ciudades filtradas
    let lista = ''
    citiesFiltered.forEach( (value) => {
        lista += `<li>${value}</li>`
    })

    // agrego el layout
    document.querySelector('#listCity').innerHTML = lista
}

// ------------------------------------------------------------------------------------

// EJERCICIO #3 Filtrar KODERS CON OBJETOS

let koders = [
    {
        name: 'emilio', 
        age: 30,
        city: 'Guadalajara'
    },
    {
        name:'Brisset',
        age: '30',
        city: 'Lima'
    }
]

    const filterKoder = () => {
        let koderSearch = document.querySelector('#name__koder').value
        let koderFiltered = koders.filter( (koder) => {
            if(koder.name.includes(koderSearch)){
                return koder
            }
        })
        let koderList = ''
        koderFiltered.forEach( (value) => {
            koderList += `
            <li>
            <span><strong>Nombre : </strong> ${value.name} </span>
            <span><strong>Edad : </strong>${value.age}</span>
            <span><strong>Ciudad : </strong>${value.city}</span>
            </li>
            `
        })
        //Agregando al LayOut
        document.querySelector('#listKoders').innerHTML = koderList

    }



//----------------------------------------------------------------

    // const addClase = clasesLi.forEach(addClass);

    // const addClass = (arr) => arr.classList.add("prueba")

    
/**
 * Ejercicio 2.
 * Dado el siguiente Array de objetos "objPromesas"
 * Crear una funcion para Formar el markup necesario para que se vea asi
 * https://ibb.co/hWSvpx5
 * 
 * NOTA: recuerda agregas el CSS necesario para lograr este objetivo
 * 
 */

 let objPromesas = [
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/hotel1.png',
        titulo: 'LA MAYOR COBERTURA',
    },
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_desayuno_cortesia_2_0.png',
        titulo: 'DESAYUNO EN CORTESÍA*',
    },
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_cancelacion_flexible_0.png',
        titulo: 'CANCELACIÓN SIN COSTO**',
    },
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_wifi_cortesia_2_0.png',
        titulo: 'WIFI EN CORTESÍA',
    }
]


    let container = document.createElement('section')
    container.classList.add('grid__services')

    objPromesas.forEach( ( service ) => {
        let divService = document.createElement('div')
        divService.classList.add('grid__services__item')

        let imgService = document.createElement('img')
        imgService.classList.add('src', service.imagen)

        let titleService = document.createElement('h3')
        titleService.textContent = service.titulo

        divService.appendChild(imgService)
        divService.appendChild(titleService)
        container.appendChild(divService)
    })

    document.getElementsByTagName('body')[0].appendChild(container)
