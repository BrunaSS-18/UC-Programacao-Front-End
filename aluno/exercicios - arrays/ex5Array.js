//Lista de compras 2: adicione um parâmetro `formato` à função 
// `gerarTextoCompras(itens, formato)`, que espera receber `texto` ou 
// `lista`. Caso seja passado `texto`, retorne os itens separados por 
// vírgula e espaço. Caso seja passado `lista`, retorne os elementos 
// prefixados com um marcador • e separados por uma quebra de linha. 

function gerarTextoCompras(formato, itens){

    if(formato === "texto"){
        return itens.join(", ")
    }
    
    else if (formato === "lista"){
        return "• " + itens.join("\n• ") 
    }
}

let produtos = ["Brigadeiro","Beijinho","Pudim","Torta","Bolo"]

let lista = gerarTextoCompras("texto", produtos)
console.log(lista)

let listaEmLinhas = gerarTextoCompras("lista", produtos)
console.log(listaEmLinhas)