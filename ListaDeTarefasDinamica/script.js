let botao = document.querySelector("#botao-adicionar");

botao.addEventListener('click', () => {
    const container = document.getElementById('lista-de-tarefas');
    let linha = document.createElement('li');
    let tarefa = document.getElementById('input-nova-tarefa').value;
    if (tarefa.trim() === '') {
        alert('Por favor, insira uma tarefa válida.');
        return;
    }
    linha.textContent = tarefa;
    container.appendChild(linha);

    linha.classList.add('tarefa-item');

    let botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('botao-remover');
    linha.appendChild(botaoRemover);

    botaoRemover.addEventListener('click', () => {
        container.removeChild(linha);
    });
});