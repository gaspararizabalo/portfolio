const miFormulario= document.getElementById("form-contacto");

miFormulario.addEventListener("submit", function (event){

event.preventDefault();

alert("Gracias por contactarme! Te responderé lo más pronto posible");

miFormulario.reset();
})