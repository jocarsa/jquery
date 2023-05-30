$(document).ready(function(){
    $("button").click(function(){
        console.log("Has pulsado sobre un boton")
        var operacion = $(this).attr("operacion")
        console.log("La operación seleccionada es: "+operacion)
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
