$(document).ready(function(){
    console.log("funcionando")
    $('h2').html('Etiqueta jquery 1')
    $('.nav-link').html("reemplazando texto desde clase")
    $("#foto_div").html("reemplazando foto_div")

    $("#foto_div").addClass('text-danger')
    $("#foto_div").append("<h1> este es un elemento al final </h1>")

    $(".col-sm-4").css({color: "blue", background: "green", padding: "20px"})

    $("img").attr("src", "")
})