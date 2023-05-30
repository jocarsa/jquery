var seleccionadocadena;
$(document).ready(function(){
    $("button").click(function(){
        console.log("Has pulsado sobre un boton")
        var operacion = $(this).attr("operacion")
        console.log("La operación seleccionada es: "+operacion)
        seleccionadocadena = window.getSelection().toString()
        switch(operacion){
            case "negrita":
                reemplazar("<b>","</b>")
                break;
            case "cursiva":
                reemplazar("<i>","</i>")
                break;
            case "subrayado":
                reemplazar("<u>","</u>")
                break;
        }
    })
    $("#fuentes").change(function(){
        var fuente = $(this).val()
        console.log(fuente)
        reemplazar("<span class='"+fuente+"'>","</span>")
    })
})
function reemplazar(apertura,cierre){
    todo = $("#contenido").html()
    cadena = todo.replace(seleccionadocadena, apertura+seleccionadocadena+cierre);
    $("#contenido").html(cadena)
}
