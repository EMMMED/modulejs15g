// Tarea 1

/**
 * Ejercicio 1.
 * Dado el siguiente Array ['Hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']
 * Formar el siguiente markup en el DOM
 * <ul class="menu__booking" data-menu="booking">
        <li class="menu__booking__item">Hoteles</li>
        <li class="menu__booking__item">Ofertas</li>
        <li class="menu__booking__item">Viajes</li>
        <li class="menu__booking__item">Ayuda</li>
        <li class="menu__booking__item">Cancelaciones</li>
    </ul>
 * 
 */

    let menuContainer = document.createElement('ul')    
    menuContainer.classList.add('menu__booking')
    menuContainer.setAttribute('id','menu__booking')
    
    let arrMenu = ['Hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']
    
    arrMenu.forEach( (menu) => {
        
        let liMenu = document.createElement('li')
        liMenu.classList.add('menu__booking__item')
        liMenu.textContent = menu
        menuContainer.appendChild(liMenu)
    })
    
    document.getElementsByTagName('body')[0].appendChild(menuContainer)
    
    
    
/**
 * Dado un array
 * ['colima', 'colombia','Estado de mexico']
 * 
 * EScuchar el evento keyup en un input
 * Filtrar del array las coincidencias
 * Pintar las coincidencias en una lista
 * 
 */

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



let koders = [
    {
        name: 'emilio',
        age: 30,
        city: 'Guadalajara'
    },
    {
        name: 'juan',
        age: 30,
        city: 'guanajuato'
    },
    {
        name: 'Brisset',
        age: 37,
        city: 'Lima'
    }
]


// FUncion => tarea especifica

const filterKoders = () => {
    // filtrar ciudades
    let KoderSearch = document.querySelector('#name__koder').value.toLowerCase()
    let KoderTerm = document.querySelector('#filterby').value.toLowerCase()
    console.log(KoderTerm)

    let kodersFiltered = koders.filter( (koder) => {
        console.log(koder)

        // if( koder.name.toLowerCase().includes(KoderSearch) ){
        //     return koder  
        // }

        
        let koderTerm = typeof koder[KoderTerm] !== 'number' ? koder[KoderTerm].toLowerCase() : koder[KoderTerm]
        console.log(koderTerm)

        if(KoderTerm === 'age') {
            if((koderTerm).toString().includes(KoderSearch) === true){
                return koder
            }
        } else  {
            if(koderTerm.includes(KoderSearch) === true){
                return koder
            }
        }
    })

    console.log(kodersFiltered)

    // creo el layout con las ciudades filtradas
    let lista = ''
    kodersFiltered.forEach( (koder) => {
        lista += `
            <li>
                <strong>${koder.name}</strong>
                <span>${koder.age} años</span>
                <span>${koder.city}</span>
            </li>
        `
    })
    console.log(lista)

    // agrego el layout
    document.querySelector('#listKoders').innerHTML = lista
}

const filterKoder = () => {
    filterKoders()
}



const changeFilter = () => {
    filterKoders()
}

const orderfilter = () => {
    let KoderSearch = document.querySelector('#name__koder').value.toLowerCase()
    let KoderTerm = document.querySelector('#order').value.toLowerCase()
    
}