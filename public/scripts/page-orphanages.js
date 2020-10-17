//Cria um mapa
const map = L.map('mapid').setView([-23.5718345,-46.6609128], 15);

//cria uma layer e adiciona ao mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Criar um icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 60],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
});

//Criar um popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight:240
}).setContent('Lar das meninas <a href="/orphanage?=1" class="choose-orphanage"><img src="/images/arrow-white.svg"></a>');

//Cria uma marcação no mapa com base nas coordenadas
L.marker([-23.5718345,-46.6609128], {icon})
.addTo(map)
.bindPopup(popup);