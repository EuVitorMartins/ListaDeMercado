const form = document.querySelector("#novoItem");
const lista = document.querySelector(".lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) => {
    criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['produto']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find(elemento => elemento.nome === nome.value )

    const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value
    }

    if (existe){
        itemAtual.id = existe.id

        atualizaElemento(itemAtual)

        itens[existe.id]= itemAtual
    } else {
        itemAtual.id = itens.length
            
        criaElemento(itemAtual)

        itens.push(itemAtual)
    }


    /*alinha a baixo diz como usar o lacalStorege para armazenamento de dados*/
    localStorage.setItem("itens",JSON.stringify(itens))

    nome.value = "" 
    quantidade.value = ""

});

function criaElemento(item){
    /*para criar uma elemento usamos dessa maneira abaixo*/
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")
    
    /*para criar uma class usamos dessa maneira maneira acima */
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    
    const check = document.createElement("input")
    check.type = ("checkbox")
    novoItem.appendChild(check)

    /*Para adicionar elemento dentro de outro, usasse o appendChild*/
    novoItem.appendChild(numeroItem) 

    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDelete(item.id))

    lista.appendChild(novoItem)
 
    console.log(novoItem)
}

function atualizaElemento (item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDelete(id) {
    const elementobotao = document.createElement("button")
    elementobotao.innerHTML = "X"

    elementobotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id)
    })

    return elementobotao 
}

function deletaElemento( tag, id){
    tag.remove()
    
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens",JSON.stringify(itens))
}

function itemPego(){
    const check = document.createElement("input")
    check.type = ("checkbox")

    check.addEventListener("click", )

    return check
}
