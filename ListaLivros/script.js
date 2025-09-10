document.querySelector("#search-btn").addEventListener("click", function() {
    const termoPesquisado = document.querySelector("#search-input").value.toLowerCase();
    const resultados = document.querySelector("#results-container");
    const status = document.querySelector("#status");
    status.textContent = "Carregando...";
    if (termoPesquisado === "")
        return status.textContent = "Por favor, insira um termo de pesquisa.";
    status.textContent = "";

    fetch('https://openlibrary.org/search.json?q=' + encodeURIComponent(termoPesquisado))
        .then(response =>{
            if (!response.ok) {
                throw new Error('Sem resposta do servidor ou erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            resultados.innerHTML = "";
            data.docs.forEach(book => {
                const resultado = document.createElement("div");
                resultado.classList.add("book-item");
                
                const titulo = document.createElement("h3");
                titulo.classList.add("book-title");
                titulo.textContent = book.title || "Título não disponível";

                const autor = document.createElement("p");
                autor.classList.add("book-author");
                autor.textContent = "Autor: " + (book.author_name ? book.author_name.join(", ") : "Autor não disponível");

                const ano = document.createElement("p");
                ano.classList.add("book-year");
                ano.textContent = "Ano de Publicação: " + (book.first_publish_year || "Ano não disponível");

                resultado.appendChild(titulo);
                resultado.appendChild(autor);
                resultado.appendChild(ano);
                resultados.appendChild(resultado);
            })
        })
        .catch(error => {
            console.error('Erro ao buscar livros:', error);
            status.textContent = "Ocorreu um erro ao buscar os livros. Por favor, tente novamente mais tarde.";
        });
});