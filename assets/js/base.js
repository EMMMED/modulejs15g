// Seleccionar Elementos 

// Id
    document.getElementById("head_title")
    //REgresa el elemento con el id descrito
// Clase
    document.getElementsByClassName('li')
    // Regresa un array con los elementos que cuenten con la clase descrita
// 
    // document.querySelector('#head-title').data-title
    // document.querySelectorAll('')

// Obtener Atributos

// Setear
// Get Atributos

    document.getElementById("head_title").getAttribute("data-title")
    document.getElementById("head_title").getAttribute("data-level")
// Set Atributos
    document.querySelector("#head_title").setAttribute('data-custom','random')
    // Sobrescribir clase
    document.querySelector("#head_title").setAttribute('class','clase1')
    // Agregar clase sin sobreescribr las existentes
    document.querySelector("#head_title").classList.add("clase2", "clase3", "clase4")
    // Remover Clases 
    document.querySelector("#head_title").classList.remove("clase3")

    document.querySelector('#head_title').hasAttribute('id')

//    comprobar si el titulo tiene ID
