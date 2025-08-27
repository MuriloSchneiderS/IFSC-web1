const body = document.body;
const button = document.getElementById('botao-tema');

button.addEventListener('click', () => {
    body.classList.toggle('modo-escuro');
})