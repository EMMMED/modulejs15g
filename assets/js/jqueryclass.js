/*

	SELECTORES JQUERY 

**  $('.class').action
**  $('#id').action
**  $('tag').action
**  $('').action
** $('img.clase1.clase2').action
** $('img.clase1").action

****    actions = click, dblclick, keyDown, keyUp, focus, blur, etc...

******  $('p').addClass('parrafo')
******  $('p').removeClass('parrafo')
******  $('p').hide('parrafo')
******  $('p').show('parrafo')
******  $('p').remove('parrafo')

Con On( 'evento', myFunction() )

$("#concretar_oferta").on("click",myFuncion())

Con Bind()
$(elemento).bind( 'evento', myFunction() )

$("#blog-test-cont .blog-test").bind("click", function(){
	$(this).after("<p class=\"blog-test\">Pulsa para probar " + (++bt_count) + "</p>");
});
*/

// Iniciar JQUERY

// $('div').addClass('list')
// $('li').addClass('item-list')

// $('ol').append('<li class="item-final">item list final</li>')



$(document).ready( () => {
	console.log('document ready')
	

	// #1 Agrega Li al final
	for(let i = 0; i<= 10; i++){
		$('ul').append('<li>Items final</li>')
	}

	//#2 Agrega Li al inicio
	for(let i = 0; i<= 10; i++){
		$('ol').prepend('<li>Li Iniciales</li>')
	}

	//#3 Agrega un parrafo dentro de .content y da estilos
	$('.content').append('<p>Hola Koder</p>').css({
		'background-color' : '#333',
		'color' : 'white',
		'font-size' : '32px'
	})
	// $('.content').append('<div class="content"><p>Hola Koder</p></div>')
	// $('.content').css('background-color' , '#333')

	//#4 Cambia el texto del h1
	$('h1').text('Aprendiendo Jquery')


	//EJERCICIO #2

	$('strong').addClass('bold')
	$('.text__container').prepend('<b> Title text </b>')
	$('.container').addClass('open').css('display', 'block')
	

	/**
     * Agregar al strong la clase bold
     * El elemento con la clase text__container, agregar el inicio  <b>Title text</b>
     * Agregar al container la clase open
     * Por defecto el container no debe estar visible
     * cuando cambiemos la clase open, debe de mostrarse
     */



})


/*

		TRAVERSING JQUERY (O__O)

**	Cmbiar el texto del elemento previo a la selección
**	$(elemento).prev().text('nuevo texto') 


**	Cmbiar el texto del elemento siguiente a la selección
**	$(elemento).next().text('nuevo texto')

	Selecciona al elemento padre del seleccionado
**	$(elemento).parent() 

**	Selecciona al tag mas cercano que le demos
**	$('li).closet('primer-padre)
	ul.primer-padre>ul>ul>li

**	
**

*/


