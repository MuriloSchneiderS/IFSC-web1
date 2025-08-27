const nome = document.querySelector('#input-nome');
const img = document.querySelector('#input-imagem-url');

let nomeSaida = document.querySelector('#card-nome');
let imgSaida = document.querySelector('#card-imagem');

nome.addEventListener('input', () => {
    if(nome.value.trim() ===""){
        nomeSaida.textContent = "Seu nome";
    } else {
        nomeSaida.textContent = nome.value;
    }
});

img.addEventListener('input', () => {
    if(img.value.trim() === ""){
        imgSaida.src = "https://via.placeholder.com/150";
    } else {
        imgSaida.src = img.value;
    }
});