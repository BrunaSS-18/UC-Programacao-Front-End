const produtos_vendas = {
    cafes: [
        {
            sku: 7654,
            marca: "Povo Brasileiro",
            preco: 24.00,
            categoria: "Mercearia"
        },
        {
            sku: 8765,
            marca: "Soberano - Gourmet",
            preco: 29.00,
            categoria: "Mercearia",
        },
        {
            sku: 3467,
            marca: "Dose Certa",
            preco: 27.00,
            categoria: "Mercearia"
        }
    ]  
}
 
const produtos_estoque = {
    cafes: [
        {
            sku: 3467,
            peso: 500.00,
            unidade: "mg",
            estoque: 101
        },
        {
            sku: 7654,
            peso: 250.00,
            unidade: "mg",
            estoque: 182
        },
        {
            sku: 8765,
            peso: 250.00,
            unidade: "mg",
            estoque: 46
        }
    ]
}

const produtos = []

for (let i = 0; i < produtos_vendas.cafes.length; i++){
    let produtoVenda = produtos_vendas.cafes[i]
    let produtoCompleto = {
        sku: produtoVenda.sku,
        marca: produtoVenda.marca,
        categoria: produtoVenda.categoria
    }

    for(let i = 0; i < produtos_estoque.cafes.length; i++){
        let produtoEstoq = produtos_estoque.cafes[i]

        if(produtoEstoq.sku === produtoVenda.sku){
            produtoCompleto.peso = produtoEstoq.peso
            produtoCompleto.unidade = produtoEstoq.unidade
            produtoCompleto.estoque = produtoEstoq.estoque
        }
    }

    produtos.push(produtoCompleto)
}

console.log(produtos)