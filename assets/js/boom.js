// window.alert = crea un alerta en el navegador
// window.innerHeight = Altura de la ventana del navegador 
// window.innerWidth = Ancho de la ventana del navegador 
// window.location =  Te devuelve un objeto con todos los datos del navegador
// window = También devuelve un objeto con información de la página y el navegardor
// window.navigator  = devuelve información sobre el navegador y el sistema operativo

const nextPage = document.querySelector('#next')
const prevPage = document.querySelector('#prev')

const siguiente = () => {
    window.history.forward()
}

const atras = () => {
    window.history.back()
}

nextPage.addEventListener( 'click', siguiente() )
prevPage.addEventListener( 'click', atras() )
