$(document).ready(function(){
    $("button").click(function(){
        console.log("Has pulsado sobre un boton")
        var operacion = $(this).attr("operacion")
        console.log("La operación seleccionada es: "+operacion)
        var seleccionado = window.getSelection()
        var seleccionadocadena = seleccionado.toString()
        var rango = seleccionado.getRangeAt(0);
        var inicio = rango.startOffset;
        var final = rango.endOffset;
        console.log(rango)
        console.log(inicio)
        console.log(final)
        console.log(seleccionado)
        switch(operacion){
            case "negrita":
                break;
            case "cursiva":
                break;
            case "subrayado":
                break;
        }
    })
})
