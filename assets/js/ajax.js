// AJAX
// Asynchronous JavasCript And XML
// Metodología 

// xmlhttprequest
// .fetch

// CLiente
// Armar el request 
// Enviar la petición http 
// Verbos HTTP 
// POST , GET, PUSH, PULL
//
//
//
//
// Server 
// Entender la petición
// Armar la respuesta
// Enviar la Respuesta
// 


// XMLHttpRequest()
/*
*   Declarar un objeto XMLHttpRequest
*   Abrir la conexion (Empezar a crear el request) 
*   Escuchar cuando el response este listo
*   Agregar un Listener 
*   Enviar la petición
*   
*/
const xhttp = new XMLHttpRequest()
const url = ""

xhttp.onload = function(data) {
    if(data.target.status === 200){
        console.log(data.target)
    }
}
// xhttp.open('GET', 'url')
xhttp.open("GET","url" )

// Neviar la peticion 
xhttp.send


// JSON
// Sirve para convertir de texto a objetos JSON.parse()
// Sirve para convertir de objetos a texto JSON.stringify()

