
// /**
//  * Selecionar elementos
//  * 
//  * 1. Selecionar por ID
//  */

// //  1. Selecionar por ID
// document.getElementById('head__title') 
// document.getElementsByTagName('li')
// document.getElementsByClassName('link__menu')

// document.querySelector('#head__title')
// document.querySelector('li')
// document.querySelector('.link__menu')
// document.querySelectorAll('.link__menu')
// // document.querySelectorAll('')

// /**
//  * Obtener atributos
//  * Setear atributos
//  */

// // get
// let title = document.querySelector('#head__title').getAttribute('data-title')
// let level = document.querySelector('#head__title').getAttribute('data-level')

// // set
// document.querySelector('#head__title').setAttribute('data-custom','random')
// // reemplazando clases 
// document.querySelector('#head__title').setAttribute('class','trees cuatro')

// // Agregar clases
// document.querySelector('#head__title').classList.add('clase3')
// // remover clases
// document.querySelector('#head__title').classList.remove('clase2')

// // comprobar si existe un atributo
// document.querySelector('#head__title').hasAttribute('class')


// comprobar si el titulo tiene class
/**
 * Si si, comprobar 
 * ---si tiene la clase "clase1 clase2"
 * ----- Agregar la "clase 3"
 * ---sino 
 * ----- Agregar la clase "custom"
 */

// let elementTitle = document.querySelector("#head__title")

//  if(elementTitle.hasAttribute("class") == true){
//     elementTitle.getAttribute("class") == "clase1 clase2" ? elementTitle.classList.add("clase3") :
//     elementTitle.classList.add("custom")
//     }


    // // createElement('tag')
    // let ulElement = document.createElement('ul')
    // ulElement.textContent = 'Text cool'

    // let liFirst = document.createElement('li')
    // liFirst.textContent = 'item 1'

    // let liSecond = document.createElement('li')
    // liSecond.textContent = 'item 2'

    // ulElement.appendChild(liFirst)
    // ulElement.appendChild(liSecond)
    // document.getElementsByTagName('body')[0].appendChild(ulElement)



    //--------------------------------------------------------

    let ulMenu = document.createElement('ul')
    ulMenu.setAttribute("id", "menu")
    ulMenu.setAttribute("class", "menu")
    ulMenu.textContent = "Menu"

    let home = document.createElement('li')
    let products = document.createElement('li')
    let aboutUs = document.createElement('li')

    home.setAttribute("class", "item__menu")
    products.setAttribute("class", "item__menu")
    aboutUs.setAttribute("class", "item__menu")

    home.textContent = 'Home'
    products.textContent = 'Products'
    aboutUs.textContent = "About Us"

    ulMenu.appendChild(home)
    ulMenu.appendChild(products)
    ulMenu.appendChild(aboutUs)
    // document.getElementsByTagName('li').setAttribute("class", "item_menu")

    // document.querySelector('#head__title').setAttribute('class','trees cuatro')
    document.getElementsByTagName('body')[0].appendChild(ulMenu)

    

    // document.getElementsByTagName("li").add('class', 'item_menu')
    

//     <ul id="menu" class="menu">
//     <li class="item__menu">Home</li>
//     <li class="item__menu">Products</li>
//     <li class="item__menu">About Us</li>
//     </ul>



// data attributes
// propiedades personalizadas



/**
 * Seleccionar padres e hijos (traversing)
 */


/**
 * Manipular elementos del DOM
 */
