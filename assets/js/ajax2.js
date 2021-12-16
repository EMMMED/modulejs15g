const peticion = new XMLHttpRequest()
const peticionComentarios = new XMLHttpRequest()

    peticion.open('GET', 'https://jsonplaceholder.typicode.com/posts/1 ')
    peticionComentarios.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments')

    
    peticion.onload = function(data) {
        if(data.target.status === 200){
            let cardResp = data.target.response
            let cardObj = JSON.parse(cardResp)
            let cardArr = ''

            cardArr += `
                    <div class="col-12 col-md-4 text-center mb-5">
                        <div class="card bg-light h-100 rounded-3" style="width: 30rem;">
                        <div class="card-body">
                             <h5 class="card-title">${cardObj.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${cardObj.id}</h6>
                            <p class="card-text">${cardObj.body}</p>
                            <h3 class="bg-secundary">Comentarios</h3>
                            <ul class="list-group list-group-flush">
                            </ul>
                        </div>
                        
                        </div>
                    </div>
                 `

             let printCards = document.getElementById("row__cont")
             printCards.innerHTML = cardArr

             
             peticionComentarios.onload = function(data){
                let comentsResp = data.target.response
                let comentsObj = JSON.parse(comentsResp)
                let coments = ''

                comentsObj.forEach(element => {
                coments += `
                    <li class="list-group-item bg-light text-left">
                        <strong>${element.name}</strong>
                        <p>${element.email}
                        <p>${element.body}</p>
                    </li>
                    `
                });
                printComents = document.querySelector('.list-group-flush')
                printComents.innerHTML = coments
            }
        }   
    }


    peticion.send()
    peticionComentarios.send()