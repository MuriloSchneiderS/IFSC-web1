document.getElementById('new-cat-btn').addEventListener('click', function() {
    const imagem = document.getElementById('cat-image');

    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            imagem.src = data[0].url;
            document.getElementById('loading').style.display = 'none';
            document.getElementById('cat-image').style.display = 'block';
        })
});