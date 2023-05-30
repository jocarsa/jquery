$(document).ready(function(){
    $("input").keyup(function(){
        var contenido = $(this).val()
        console.log("has escrito: "+contenido)
        var idioma = $("select").val()
        console.log("tu idioma: "+idioma)
        $("#resultados").load("php/busca.php?palabra="+contenido+"&idioma="+idioma)
    })
})
