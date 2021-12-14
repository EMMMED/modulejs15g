// TAREA ¿Qué es un Callback?

// addEventListener(type, listener, option)
const saludo = () => {
    console.log('Saludos addEventListener')
}

let eventButton = document.getElementById('#button__eventListener')

// OPCION 1 eventButton.addEventListener('clic', saludo)
// OPCION 2
eventButton.addEventListener('clic', () => {
    console.log('Saludos addEventListener')
})

