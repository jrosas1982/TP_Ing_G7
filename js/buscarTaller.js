var taller1 = { nombre: "Picasso", latitud: -34.667104, longitud: -58.370278, nroDeTelefono: "02320-683182", franjaHoraria: "De 07:00 a 18:30", img: "img/tallerPicasso.jpg" };
var taller2 = { nombre: "Rembrandt", latitud: -34.600104, longitud: -58.380678, nroDeTelefono: "02320-683182", franjaHoraria: "De 08:00 a 20:00", img: "img/tallerRem.jpg" };
let listaTalleres = [taller1, taller2];
var map;

function cargarAlIniciar() {
    var ungsLocation = [-34.5221554, -58.7000067];
    map = L.map('mapid').setView(ungsLocation, 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

function mostrarEnMapa() {
    var nombreDelTaller = $("#inputNombreTaller").val(); //Obtengo el valor ingresado del Label NombreTaller
    var coordenada = [];
    for (var i = 0; i < listaTalleres.length; i++) {
        //OBTENER LATITUD Y LONGITUD DE TALLER INGRESADO POR TECLADO
        if (listaTalleres[i].nombre.toUpperCase() == nombreDelTaller.toUpperCase()) {
            coordenada.push(listaTalleres[i].latitud);
            coordenada.push(listaTalleres[i].longitud);
            var tallerMarker = L.marker(coordenada, { closeOnClick: true });
            tallerMarker.bindPopup("Nombre del Taller: " + listaTalleres[i].nombre + "<br/>" + "Franja Horaria: " + listaTalleres[i].franjaHoraria + "<br/>" + "Numero de Telefono : " + listaTalleres[i].nroDeTelefono + "<img style='width:100%' src='" + listaTalleres[i].img + "' alt=''>");
            map.setView(coordenada, 15);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            tallerMarker.addTo(map);
        }
    }
}