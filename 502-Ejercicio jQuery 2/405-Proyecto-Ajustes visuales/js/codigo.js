$(document).ready(function(){
    $("input").keyup(function(){
        var contenido = $(this).val()
        console.log("has escrito: "+contenido)
        $("#resultados").load("php/busca.php?palabra="+contenido)
    })
})
