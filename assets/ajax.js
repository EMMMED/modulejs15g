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
const xhttp = new XMLHttpRequest()

xhttp.onload = function(data) {
    if(data.target.status === 200){
        console.log(data.target)
    }
}

xhttp.open("GET", )