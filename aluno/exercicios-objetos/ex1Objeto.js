const produto1 = {
    nome: "Bolo",
    preco: 12,
    categoria: "Padaria"
}

const produto2 = {
    nome: "Sonho",
    preco: 6,
    categoria: "Padaria"
}

function valorMaior(p1, p2){
    if(p1.preco > p2.preco) {
        console.log("O maior valor é: " + produto1.nome + " | preço: " + produto1.preco + " | categoria: " + produto1.categoria)
    }
    else if (p2.preco > p1.preco) {
         console.log("O maior valor é: " + produto2.nome + " | preço: " + produto2.preco + " | categoria: " + produto2.categoria)
    }
    else{
        console.log("Os valores são iguais")
    }
}

valorMaior(produto1, produto2)