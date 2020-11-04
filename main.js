console.log("llega hasta acá");

$("#buscaTaller").click(function() {

    console.log("llegó a buscar taller");

    $("#carouselExampleInterval").hide();
    document.getElementById("contenidoTaller").innerHTML = '<h2> soy un taller </h2>';
});