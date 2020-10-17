let marker;
//Cria um mapa
const map = L.map('mapid').setView([-23.5718345,-46.6609128], 15);

//cria uma layer e adiciona ao mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Criar um icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 60],
    iconAnchor: [29,68]
});

//Criar e adicionar uma marcação no mapa de
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icones
    //Se o marker existir ele remove
    marker && map.removeLayer(marker);
    //adicionar icone a marcação
    marker = L.marker([lat, lng], {icon}).addTo(map);
});

//Adicionar o campo de fotos
function addPhotoField(){
    //pegar container de fotos #images
    const container = document.querySelector('#images');
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // realizar o clona da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    //Verificar se o ultimo campo esta vazio, se sim não adicionar ao container de imagens
    const input =newFieldContainer.children[0]
    if(input.value == ""){
        return;
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = "";
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
};

function deleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');
    if(fieldsContainer.length <= 1){
        //limpar campo
        span.parentNode.children[0].value = "";
        return;
    }

    // deletar campo
    span.parentNode.remove();
}

// Selecionar sim ou Não
function toggleSelect(event){
    //retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'));
    //adicionar a classe active no botão acionado
    const button = event.currentTarget;
    button.classList.add('active');
    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value;
}
    
    
    

