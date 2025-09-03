const carrinho = document.querySelector('#cart');
const itensCarrinho = carrinho.querySelector('#cart-items');
const produtos = document.querySelector('#products-list');

produtos.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
        let produtoSelecionado = event.target.parentElement;
        
        let produtoAdicionado = document.createElement('span');
        produtoAdicionado.className = 'cart-item';
        produtoAdicionado.textContent = produtoSelecionado.querySelector('h3').textContent + ' - ' + produtoSelecionado.querySelector('p').textContent;
        
        let botaoRemover = document.createElement('button');
        botaoRemover.className = 'remove-btn';
        botaoRemover.textContent = '-';
        botaoRemover.addEventListener('click', () => {
            itensCarrinho.removeChild(produtoAdicionado);
        });
        
        produtoAdicionado.appendChild(botaoRemover);
        itensCarrinho.appendChild(produtoAdicionado);
    });
});

