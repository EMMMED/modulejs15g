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

    //  Create Elements
    let ulElement = document.createElement('ul')
    ulElement.textContent = "Dom Manipulation"

    let liFirst = document.createElement('li')
    liFirst.textContent = "HOTELES "

    let liSecond = document.createElement('li')
    liSecond.textContent = "OFERTAS"

    let liThird = document.createElement('li')
    liThird.textContent = "VIAJES"

    let liFour = document.createElement('li')
    liFour.textContent = "AYUDA"

    let liFive = document.createElement('li')
    liFive.textContent = "CANCELACIONES"

    //  Append Elements
    ulElement.appendChild(liFirst)
    ulElement.appendChild(liSecond)
    ulElement.appendChild(liThird)
    ulElement.appendChild(liFour)
    ulElement.appendChild(liFive)
    document.getElementsByTagName('body')[0].appendChild(ulElement)

    // Add Class Ul
    ulElement.classList.add("menu__booking")
    ulElement.setAttribute('id', "menu__booking")

    //  Add Class Li
    liFirst.classList.add("menu__booking__item")
    liSecond.classList.add("menu__booking__item")
    liThird.classList.add("menu__booking__item")
    liFour.classList.add("menu__booking__item")
    liFive.classList.add("menu__booking__item")


    // ADD CLASS LI W/ARROW FUNCTIONS

    var clasesLi = document.getElementsByTagName('li')
    console.log(clasesLi)

    

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

/**
 *  Tarea 2
 * Estudiar lo siguiente:
 * 1. innerHTML 
 * 2. insertBefore() lo inserta antes del elemento que le indiques
 * 3. insertAfter() Lo inserta despuies del elemento que le indiques
 * 4. append() Inseta el elemento como ultimo hijo del padre seleccionado
 * 5. prepend() Inserta el elemento como primer hijo del padre seleccionado
 * 6. removeChild() Remueve el hijo que le indiques, retorna ese hijo removido
 * 7. DOM events click, dblclick, focus, focusin, focusout
 * 
 */