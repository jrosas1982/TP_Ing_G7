var map;
var tallerMarker;

function cargarAlIniciar() {
    var ungsLocation = [-34.5221554, -58.7000067];
    map = L.map('mapid').setView(ungsLocation, 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

function limpiarMarker() {
    map.removeLayer(tallerMarker);
}

function buscarTalleresRegistrados(elem, tipo) {
    var tallerSeleccionado;
    for (var i = 0; i < listaTalleres.length; i++) {
        if (tipo == "nombre") {
            if (listaTalleres[i].nombre == elem) {
                tallerSeleccionado = listaTalleres[i];
            }
        } else {
            if (listaTalleres[i].actividad == elem) {
                tallerSeleccionado = listaTalleres[i];
            }
        }
    }
    return tallerSeleccionado;
}

function buscarPorNombreTaller() {
    return buscarTalleresRegistrados(document.getElementById("seleccionDeTaller").value, "nombre");
}

function buscarPorActividad() {
    return buscarTalleresRegistrados(document.getElementById("seleccionDeActividad").value, "actividad");
}

function limpiarSelectorActividad() {
    $("#seleccionDeActividad").val("Seleccionar");
}

function limpiarSelectorTaller() {
    $("#seleccionDeTaller").val("Seleccionar");
}

function mostrarEnMapa() {
    if (tallerMarker != undefined) {
        limpiarMarker();
    }
    var coordeSelected = [];
    var mostrarATaller;
    if (document.getElementById("seleccionDeTaller").value != "Seleccionar") {
        mostrarATaller = buscarPorNombreTaller();
        coordeSelected.push(mostrarATaller.latitud);
        coordeSelected.push(mostrarATaller.longitud);
    }
    if (document.getElementById("seleccionDeActividad").value != "Seleccionar") {
        mostrarATaller = buscarPorActividad();
        coordeSelected.push(mostrarATaller.latitud);
        coordeSelected.push(mostrarATaller.longitud);
    }
    if (coordeSelected[0] != null) {
        tallerMarker = L.marker(coordeSelected, { closeOnClick: true });
        tallerMarker.bindPopup("Nombre del Taller: ".fontsize(4) + mostrarATaller.nombre.fontsize(4).fontcolor("red") + "<br/>" + "Franja Horaria: ".fontsize(4) + mostrarATaller.franjaHoraria.fontsize(4).fontcolor("red") + "<br/>" + "Tipo de Actividad: ".fontsize(4) + mostrarATaller.actividad.fontsize(4).fontcolor("red") + "<br/>" + "Numero de Telefono : ".fontsize(4) + mostrarATaller.nroDeTelefono.fontsize(4).fontcolor("red") + "<img style='width:100%' src='" + mostrarATaller.img + "' alt=''>");
        map.setView(coordeSelected, 15);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        tallerMarker.addTo(map);
    }
}