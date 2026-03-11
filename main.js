'use strict'

function adicionarProduto() {
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById('quantidade')

    //condicional para verificar se o campo está vazio.
    if (produto.value == '' || codigo.value == '' || quantidade.value == '') { //se o campo estiver vazio, emite um aleta na tela e volta o ponteiro para o campo
        alert('Campo vazio')
        produto.focus()
        codigo.focus()
        quantidade.focus()
    } else { // se estiver preenchido cria o objeto apaga o que está escrito anteriormente e volta o ponteiro após o click no botao adicionar
        //cria o span e pega o elemento dele
        const spanProduto = document.createElement('span')
        spanProduto.textContent = produto.value
        spanProduto.className = 'flex flex-col bg-blue-100 px-8 py-2'

        const spanCodigo = document.createElement('span')
        spanCodigo.textContent = codigo.value
        spanCodigo.className = 'flex flex-col bg-blue-100 px-8 py-2'

        const spanQuantidade = document.createElement('span')
        spanQuantidade.textContent = codigo.value
        spanQuantidade.className = 'flex flex-col bg-blue-100 px-8 py-2'

        lista.appendChild(spanProduto)
        lista.appendChild(spanCodigo)
        lista.appendChild(spanQuantidade)
        produto.value = ""
        codigo.value = ''
        quantidade.value = ''
        produto.focus()
    }
}