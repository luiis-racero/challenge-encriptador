function encriptar(){   /* FUNCION PARA ENCRIPTAR EL TEXTO */
    let ingresoText = document.getElementById("ingresarText").value.toLowerCase(); /* Para obtener lo ingresaddo en el input por medio del id */
    let encriptado = ingresoText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");


    if(encriptado != 0){

        document.getElementById("encriptado").value=encriptado;

        document.getElementById("ingresarText").value = ""; /* Para limpiar el campo al darle click al boton */
    
    
        document.getElementById("encriptado").style.background = "none";        /*PARA OCULTAR IMAGEN */
        document.getElementById("mensajeNoencontrado").style.display = "none";  /* """"""  Mensaje no encontrado*/
        document.getElementById("parrafoIngresar").style.display = "none";      /* """""   Parrafo */
        document.getElementById("mostrarBotoncopy").style.visibility = "visible"; /* Para mostrar el boton oculto con visibility hidden */
    }
    else{
        document.getElementById("alerta").style.visibility = "visible"; /* MUESTRA LA ALERTA DE NO MENSAJE */
    }


}

function desencriptar(){    /* FUNCION PARA DESENCRIPTAR EL TEXTO */
    let obtenidoText = document.getElementById("ingresarText").value;
    let desencriptado = obtenidoText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    if(desencriptado != 0){

        document.getElementById("encriptado").value=desencriptado;

        document.getElementById("ingresarText").value = ""; /* Para limpiar el campo al darle click al boton */

        document.getElementById("encriptado").style.background = "none";        /*PARA OCULTAR IMAGEN */
        document.getElementById("mensajeNoencontrado").style.display = "none";  /* PARA OCULTAR Mensaje no encontrado*/
        document.getElementById("parrafoIngresar").style.display = "none";      /* PARA OCULTAR Parrafo */
        document.getElementById("mostrarBotoncopy").style.visibility = "visible"; /* Para mostrar el boton oculto con visibility hidden */
    }
    else{
        document.getElementById("alerta").style.visibility = "visible"; /* MUESTRA LA ALERTA DE NO MENSAJE */
    }

}


                                  
function copiar(){                  /* FUNCION PARA COPIAR EL TEXTO */
    let copiadoTetx = document.getElementById("encriptado").value;

    navigator.clipboard.writeText(copiadoTetx);

    document.getElementById("alertaCopy").style.visibility = "visible";
    document.getElementById("encriptado").value = ""; /* Para limpiar el campo al darle click al boton */
    
                            /* DE SEGUIDO MUESTRA LA IMAGEN,MENSAJE,PARRAFO, Y OCULTA EL BOTON DE COPIAR */
    document.getElementById("encriptado").style.background = "";        /*PARA MOSTRAR IMAGEN */
    document.getElementById("mensajeNoencontrado").style.display = "";  /* PARA MOSTRAR Mensaje no encontrado*/
    document.getElementById("parrafoIngresar").style.display = "";      /* PARA MOSTRAR Parrafo */
    document.getElementById("mostrarBotoncopy").style.visibility = ""; /* Para ocultar el boton con visibility hidden */

}

function btnalerta(){   /* FUNCION PARA OCULTAR LA ALERTA DE MENSAJE NO ENCONTRADO */
    document.getElementById("alerta").style.visibility = "";
    
}

function btncopia(){   /* FUNCION PARA OCULTAR LA ALERTA DE MENSAJE COPIADO */
    document.getElementById("alertaCopy").style.visibility = "";
}