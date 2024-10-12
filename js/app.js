let total = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$0,00";

function adicionar(){
    // recuperado o produto
    let produto = document.getElementById("produto").value;
    // separaçao do nome/valor do produto e a quantidade
    let nomeProduto = produto.split("-")[0];
    let valorProduto = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    // verificação para valores nulo
    if (isNaN(quantidade) || (quantidade) <= 0) {
        alert("A quantidade do produto não pode ser 0!");
        return;
    }
    // soma do produto com a quantidade desejada
    let subTotal = valorProduto * quantidade;
    // adição dos produto no carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> Celular <span class="texto-azul">R$${subTotal}</span>
        </section>`;
    // soma do total + quantidade no carrinho
    total = total + subTotal;
    let totalGeral = document.getElementById("valor-total");
    totalGeral.textContent = `R$ ${total}`;
    document.getElementById("quantidade").value = "";
}

function limpar(){
    total = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$0,00";
    document.getElementById("quantidade").value = "";
}