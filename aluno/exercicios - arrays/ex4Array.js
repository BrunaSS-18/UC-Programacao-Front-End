//4.Lista de compras: crie uma função `gerarTextoCompras(itens)` 
// que receba um array de strings contendo produtos de supermercado. 
// A função deve retornar uma única string com todos os itens separados 
// por vírgula e espaço. Exiba a lista no console.

function gerarTextoCompras(itens){
    return itens.join(", ")
}

let produtos = ["Brigadeiro","Beijinho","Pudim","Torta","Bolo"]
let lista = gerarTextoCompras(produtos)

console.log(lista)