const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//Cria um mapa
const map = L.map('mapid', options).setView([-23.5718345,-46.6609128], 15);

//cria uma layer e adiciona ao mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Criar um icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 60],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
});



//Cria uma marcação no mapa com base nas coordenadas
L.marker([-23.5718345,-46.6609128], {icon})
.addTo(map);

/* Galeria de imagem*/

function selectImage(event){
    const button = event.currentTarget;

    //remover as classes active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => button.classList.remove("active"));

    //Selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    //Atualizar o container de imagem
    imageContainer.src = image.src;

    //Adicionar a classe active no botão selecionado
    button.classList.add('active');
}