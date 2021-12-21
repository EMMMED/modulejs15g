
const getPosts = (calback) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', '')
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            calback(data.target.response)
        }
    }
    xhttp.send()
}

const printPost = (post) => {
    let parsedPosts = JSON.parse(post)
    for(post in parsedPosts) {
        let {title, timetoread, resume, author } = parsedPosts[post]
        layout += `
        <div class="col-12 col-md-4 mb-4">
            <div class="card text-dark bg-light">
                <div class="cadr-body">
                    <h5 class="card-title"> ${title}</h5>
                    <h6 class="cardsubtitle"> ${author}</h5>
                    <p class="card-title"> ${resume}</p>
                    <a href="post.html?idpost=$${post}" class="card-link"> Ver post</a>
                </div>
            </div>
        </div>
        `
        document.querySelector('.list__post').innerHTML = layout
    }
}

getPosts(printPost)