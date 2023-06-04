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
        var todo = $("#contenido").html()
        switch(operacion){
            case "negrita":
                todo = $("#contenido").html()
                cadena = todo.replace(seleccionadocadena, "<b>"+seleccionadocadena+"</b>");
                $("#contenido").html(cadena)
                break;
            case "cursiva":
                todo = $("#contenido").html()
                cadena = todo.replace(seleccionadocadena, "<i>"+seleccionadocadena+"</i>");
                $("#contenido").html(cadena)
                break;
            case "subrayado":
                todo = $("#contenido").html()
                cadena = todo.replace(seleccionadocadena, "<u>"+seleccionadocadena+"</u>");
                $("#contenido").html(cadena)
                break;
        }
    })
})
