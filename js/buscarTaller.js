var map;

function cargarAlIniciar() {
    var ungsLocation = [-34.5221554, -58.7000067];
    map = L.map('mapid').setView(ungsLocation, 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

// function limpiarMarker(){
// map.removeLayer(tallerMarker);
// }

//Mostrar talleres en el mapa.
function mostrarEnMapa() {
    //var nombreDelTaller = $("#inputNombreTaller").val(); //Obtengo el valor ingresado del Label NombreTaller
    var coordenada = [];
    var nombreDelTaller = document.getElementById("seleccionDeTaller").value;
    var tipoDeActividad = document.getElementById("seleccionDeActividad").value;
    for (var i = 0; i < listaTalleres.length; i++) {
        //OBTENER LATITUD Y LONGITUD DE TALLER INGRESADO POR TECLADO
        if (listaTalleres[i].nombre.toUpperCase() == nombreDelTaller.toUpperCase() || listaTalleres[i].actividad.toUpperCase() == tipoDeActividad.toUpperCase()) {
            coordenada.push(listaTalleres[i].latitud);
            coordenada.push(listaTalleres[i].longitud);
            tallerMarker = L.marker(coordenada, { closeOnClick: true });
            tallerMarker.bindPopup("Nombre del Taller: " + listaTalleres[i].nombre + "<br/>" + "Franja Horaria: " + listaTalleres[i].franjaHoraria + "<br/>" + "Tipo de Actividad: " + listaTalleres[i].actividad + "<br/>" + "Numero de Telefono : " + listaTalleres[i].nroDeTelefono + "<img style='width:100%' src='" + listaTalleres[i].img + "' alt=''>");
            map.setView(coordenada, 15);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            tallerMarker.addTo(map);

        }
    }

}