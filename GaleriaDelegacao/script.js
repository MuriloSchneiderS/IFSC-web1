const mainImageWrapper = document.querySelector('.main-image-wrapper');
const thumbnails = document.querySelector('#thumbnails');

thumbnails.addEventListener('click', (event) => {
    let imagemPrincipal = mainImageWrapper.querySelector('img');
    let imagemSelecionada = event.target;
    imagemPrincipal.src = imagemSelecionada.src;
    imagemPrincipal.alt = imagemSelecionada.alt;
    imagemPrincipal.classList.remove('thumb');
    
    mainImageWrapper.querySelector('p').innerHTML = imagemSelecionada.alt;

    thumbnails.querySelector('.active').classList.remove('active');
    imagemSelecionada.classList.add('active');
});