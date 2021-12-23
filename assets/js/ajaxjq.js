$(document).ready( () => {
	console.log('document ready')

$.ajax({
    url : "https://emmmed-dev-default-rtdb.firebaseio.com/posts/.json"
}).done( (data) => {
    let temp = ''
    for(post in data) {
        temp += `
        <li>
            <strong class="title__post">${data.title}</strong
            <p>${data.resume}</p>
            </li>
        `
    }
    $('#posts').append(post)
}).fail( (err) =>{
    console.log(err)
})

})


