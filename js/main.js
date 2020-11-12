var map;

function bootstrapo() {
    var ungsLocation = [-34.5221554, -58.7000067];
    map = L.map('mapid').setView(ungsLocation, 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

function dibujarMarcadores(coordenada) {
    var primeraUbicacion = [coordenada[0], coordenada[1]];
    map.setView(primeraUbicacion, 15);
    marker = new L.marker([(coordenada[0]), coordenada[1]]).addTo(map);
}

function loguearEmail() {
    var email = $("#exampleInputEmail1").val();
    sessionStorage.setItem("email", email);
    console.log("email guardado  " + sessionStorage.getItem("email").toLocaleUpperCase());
    $("#login").show();
}

function limpiarSelector() {
    $("#direccionNormalizada").empty().append("<option>Seleccione la dirección</option>");
}

function normalizar() {
    var url = "http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=";
    var calle = $("#inputDirección").val();
    var localizacion = '&geocodificar=TRUE';
    var xhttp = new XMLHttpRequest();
    var coordenada = [];
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lista = JSON.parse(this.responseText);
            for (var index = 0; index < (Object.keys(lista.direccionesNormalizadas).length); index++) {
                document.getElementById("direccionNormalizada").innerHTML += ' <option value=' + index + '>' + lista.direccionesNormalizadas[index].direccion + ', ' + lista.direccionesNormalizadas[index].nombre_localidad + '</option>';
                coordenada = [lista.direccionesNormalizadas[index].coordenadas.y, lista.direccionesNormalizadas[index].coordenadas.x];
                dibujarMarcadores(coordenada);
            }
        }
    };
    xhttp.open("GET", url + calle + localizacion, true);
    xhttp.send();
}

function actualizarDireccionNormalizada() {
    var direccionNormalizadaElegida = $('select[name="normalizaDire"] option:selected').text();
    if (direccionNormalizadaElegida == "Seleccione la dirección") {
        direccionNormalizadaElegida = "";
    }
    $("#inputDirección").val(direccionNormalizadaElegida);
}

function validaDireccioParaInscripcion() {
    var direccionNormalizadaElegida = $('select[name="normalizaDire"] option:selected').text();
    var direccionEscrita = $("#inputDirección").val();
    if (direccionNormalizadaElegida == direccionEscrita) {
        $("#exampleModal").modal('show')
            .on("hidden.bs.modal", function() {
                window.location.href = "InscripcionTaller.html";
            });
    } else {
        $("#ModalNoOK").modal('show');
    }
}