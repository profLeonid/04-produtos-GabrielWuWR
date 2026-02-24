'use strict';

// function adicionarProduto() {
//     const produto = document.getElementById('produto');
//     const lista = document.getElementById('lista');
//     const span = document.createElement('span');

//     if (produto.value != '') {
//         span.textContent = produto.value;
//         span.className = 'bg-blue-200 px-8 py-2 rounded-2xl flex justify-center';
//         lista.appendChild(span);
//         produto.value = "";
//     } else {
//         alert('ops digite algo no campo');
//     }
// }

function cadastrarProduto() {
    const codigo = document.getElementById('codigo');
    const produto = document.getElementById('produto');
    const quantidade = document.getElementById('quantidade');
    const tabela = document.getElementById('tabela');

    if (codigo.value != '' && produto.value != '' && quantidade.value != '') {
        const linha = document.createElement('tr');
        linha.className = 'hover:bg-slate-700 transition duration-200 hover:cursor-pointer';

        const itemCodigo = document.createElement('td');
        itemCodigo.className = 'px-6 py-4';
        itemCodigo.textContent = codigo.value;

        const itemProduto = document.createElement('td');
        itemProduto.className = 'px-6 py-4';
        itemProduto.textContent = produto.value;

        const itemQuantidade = document.createElement('td');
        itemQuantidade.className = 'px-6 py-4';
        itemQuantidade.textContent = quantidade.value;

        linha.appendChild(itemCodigo);
        linha.appendChild(itemProduto);
        linha.appendChild(itemQuantidade);
        tabela.appendChild(linha);
    } else {
        alert('Verifique todos os campos eles são todos obrigatorios');
    }
}