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
        const linha = document.createElement('tr')

        const spanProduto = document.createElement('td')
        spanProduto.textContent = produto.value
        spanProduto.className = 'bg-blue-100 px-8 py-2'

        const spanCodigo = document.createElement('td')
        spanCodigo.textContent = codigo.value
        spanCodigo.className = 'bg-blue-100 px-8 py-2'

        const spanQuantidade = document.createElement('td')
        spanQuantidade.textContent = quantidade.value
        spanQuantidade.className = 'bg-blue-100 px-8 py-2'

        linha.appendChild(spanCodigo)
        linha.appendChild(spanProduto)
        linha.appendChild(spanQuantidade)

        lista.appendChild(linha)

        produto.value = ""
        codigo.value = ''
        quantidade.value = ''
        produto.focus()
    }
}

function deletarProduto(){

    const lista = document.getElementById('lista')

    if (lista.lastElementChild) {
        lista.lastElementChild.remove()
    } else {
        alert('Não há produtos para remover')
    }

}