// /**
//  * AJAX
//  * Asynchronous JavaScript And XML
//  * Metodología
//  * 
//  * xmlhttprequest
//  * .fetch()
//  * 
//  * https://www.javascript-coder.com/tutorials/images/ajax-block-diagram1.jpg
//  * https://jsonplaceholder.typicode.com/posts
//  * 
//  */

// // cliente
// // armar el request
// // enviar la peticion http
// // verbos http
// // POST, GET, PUT, PATCH, DELETE
// // 
// // server
// // status code
// // entender la peticion
// // armar la respuesta
// // enviar la respuesta

// // XMLHttpRequest()
// /**
//  * Declarar un objeto XMLHttpRequest
//  * Abrir la conexion (empezar a creat el request)
//  * Escuchar cuando el response este listo
//  * Enviar la peticion
//  * 
//  */

// //  Declarar un objeto XMLHttpRequest
// const xhttp = new XMLHttpRequest()
// // Abrir la conexion (empezar a creat el request)
// // xhttp.open(metodo, url)
// xhttp.open( "GET" , "https://jsonplaceholder.typicode.com/posts/1", true)

// // Escuchar cuando el response este listo
// xhttp.onload = function(data) {

//     if(data.target.status === 200){
//         let res = data.target.response
//         let objResp = JSON.parse(res)
//         // imprimir en DOM
//         let templateUser = ''
//         templateUser = `
//         <div>
//             <h2>${objResp.title}</h2>
//             <p>${objResp.body}</p>
//         </div>
//         `
//         document.querySelector('.container').innerHTML = templateUser
//     }
    
// }

// // Enviar la peticion
// xhttp.send()

// /**
//  * 
//  * 
//  * 
//  */

// // objeto a texto JSON.stringify(obj)
// // texto a objeto JSON.parse(text)

// // APi fetch

// // fetch()


const peticion = new XMLHttpRequest()

    peticion.open('GET', 'https://jsonplaceholder.typicode.com/posts/')

    

    peticion.onload = function(data) {
        if(data.target.status === 200){
            let cardResp = data.target.response
            let cardObj = JSON.parse(cardResp)
            let cardArr = ''

            cardObj.forEach(element => {
                    cardArr += `
                <div class="col-4 col-md-4 text-center mb-5">
                    <div class="card bg-light h-100 rounded-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${element.id}</h6>
                        <p class="card-text">${element.body}</p>
                    </div>
                    </div>
                </div>
                    `
            });
            console.log(cardArr)
            let printCards = document.getElementById("row__cont")
            console.log(printCards)
            printCards.innerHTML = cardArr
        }
    }

    peticion.send()


