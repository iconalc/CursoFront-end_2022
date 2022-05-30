//Irene Condado Alcantarilla
//Using an anonymous function:
document.getElementById("btn1").onclick = function () 
{ 
    var nombre = document.getElementById("name").value;
    var correo = document.getElementById("email").value;
    var telefono = document.getElementById("phone").value;

    // Obtener la referencia a la lista
    var lista = document.getElementById("opciones");
    // Obtener el índice de la opción que se ha seleccionado
    var indiceSeleccionado = lista.selectedIndex;
    // Con el índice y el array "options", obtener la opción seleccionada
    var opcionSeleccionada = lista.options[indiceSeleccionado];
    // Obtener el valor y el texto de la opción seleccionada
    var textoSeleccionado = opcionSeleccionada.text;
    //var valorSeleccionado = opcionSeleccionada.value;   
    
    // Obtener el valor de elemento radio
    var tipocliente = document.getElementsByName("tipo_cliente");
    function getRadioButtonSelectedValue(tipocliente)
    {
    for(i=0;i<tipocliente.length;i++)
        if(tipocliente[i].checked) 
            return tipocliente[i].value;
    }
    var typeC = getRadioButtonSelectedValue(tipocliente);

    // Obtener el valor de elemento textarea
    var mensaje = document.getElementById("texto").value;

    // Validar
    if( nombre ===''){
        alert("¡El campo nombre esta vacío!");
        return false; 
    }else if(telefono ==='' || telefono.length !=9){
        alert("¡El campo telefono no puede estar vacío y debe tener 9 digitos.!");
        return false;
    }
    else if(correo === ""){
        alert("¡El campo email esta vacío!");
        return false;
    }
    else if(mensaje === ""){
        alert("¡El campo mensaje esta vacío!");
        return false;
    }else{
        // Sacar mensaje
        alert("¡Gracias, "+nombre+". Solicitud enviada!\nDatos: \nTeléfono: "+telefono+"\nEmail: "+correo+"\nOpción: "+textoSeleccionado+"\nCliente: "+typeC+"\nMensaje: "+mensaje+".\n¡Un saludo!");
        return true;
    }
}
