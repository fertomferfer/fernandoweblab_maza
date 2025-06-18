confirm( "¿desea hacer una donacion")
alert("tu donacion fue realizada")


//obtener el boton por su id
const boton = document.getElementById('miBoton');

//agrega un evento para que cuando se haga click, redirija
boton.addEventListener('click',() => {
    //cambia esta url por la que desees redirigir
    window.location.href ='https://www.youtube.com/watch?v=swuB5IuMbP8'

});