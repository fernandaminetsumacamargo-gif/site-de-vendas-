let itensNoCarrinho = 0;
let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    itensNoCarrinho++;
    carrinho.push({ nome: nome, preco: preco });
    
    // Atualiza o contador visual
    document.getElementById('contador-carrinho').textContent = itensNoCarrinho;
    
    alert(`"${nome}" adicionado(a) ao carrinho!`);
}

function mostrarCarrinho() {
    if (itensNoCarrinho === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    
    let mensagem = `Itens no Carrinho (${itensNoCarrinho}):\n\n`;
    let total = 0;
    
    carrinho.forEach(item => {
        mensagem += `- ${item.nome} (R$ ${item.preco.toFixed(2)})\n`;
        total += item.preco;
    });
    
    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;
    
    alert(mensagem);
}