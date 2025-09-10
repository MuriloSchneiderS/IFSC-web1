document.getElementById('new-cat-btn').addEventListener('click', function() {
    const imagem = document.getElementById('cat-image');

    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            if (!response.ok) {
                throw new Error('Sem resposta do servidor ou erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            imagem.src = data[0].url;
            document.getElementById('loading').style.display = 'none';
            imagem.style.display = 'block';
        })
        .catch(error => {
            console.error('Erro ao buscar a imagem do gato:', error);
            alert('Erro ao buscar a imagem do gato. Tente novamente mais tarde.');
        });
});