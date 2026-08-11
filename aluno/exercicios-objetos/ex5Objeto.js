const carrinho = {
    cliente: "Alice",
    itens: [
        { nome: "Smartphone", preco: 2200, quantidade: 1 }
    ],
    cupons: ["MENOS10", "PROMO10", "10PORCENTO"],
 
    adicionarProduto(nome, preco, quantidade) {
        let encontrado = false;
 
        for (let item of this.itens) {
            if (item.nome === nome) {
                item.quantidade += quantidade;
                encontrado = true;
            }
        }
 
        if (!encontrado) {
            this.itens.push({ nome: nome, preco: preco, quantidade: quantidade });
        }
    },
 
    calcularTotal() {
        this.total = 0;
        for (let item of this.itens) {
            this.total += item.preco * item.quantidade;
        }
    },
 
    aplicarDesconto(cupom) {
        if (this.cupons.includes(cupom)) {
            this.cupomUtilizado = cupom;
            this.total = this.total * 0.9;
        }
    },
 
    exibirCupom() {
        console.log("Cliente:", this.cliente);
        console.log("Itens:", this.itens);
        console.log("Cupom:", this.cupomUtilizado || "Nenhum");
        console.log("Total R$:", this.total);
    }
};
 
carrinho.adicionarProduto("Smartphone", 2200, 1);
carrinho.adicionarProduto("Fone", 100, 1);      
carrinho.calcularTotal();                      
carrinho.aplicarDesconto("MENOS10");            
carrinho.exibirCupom();