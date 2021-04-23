function comparar() {

    var nombre = document.getElementById("nombre").value;
    var autor = document.getElementById("autor").value;
    var tipo = document.getElementById("tipo").value;
    var candidatos = [];
    var boolean = false;
    for (var i = 0; i < cuadros.length; i++) {
        if (nombre.toUpperCase() == cuadros[i].nombre.toUpperCase() || autor.toUpperCase() == cuadros[i].autor.toUpperCase() ||
            tipo.toUpperCase() == cuadros[i].tipo.toUpperCase()) {
            //guardo las coincidencias
            candidatos.push(cuadros[i]);
            boolean = true;
        }
        if (i == cuadros.length - 1 && boolean == false) {
            alert("No se encontro ninguna relacion")
        }
    }
    mostrarResultados(candidatos);
}

function mostrarResultados(arreglo) {
    document.getElementById("mybox").innerHTML = " ";
    for (var item of arreglo) {
        document.getElementById("mybox").innerHTML += " <div class='card'><img src='" + item.imagen + "' alt='Avatar' style='width:100% heigth='200px;'' > <div class='container'> <h4><b>Nombre: " + item.nombre + "</b></h4> <p>Autor: " + item.autor + " </p> </b></h4> <p>Autor: " + item.tipo + " </p> </div> </div> <br>";
    }
}
