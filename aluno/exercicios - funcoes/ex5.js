function exibirProduto(nomeProduto, preco) {
    alert(nomeProduto + " …………………………… R$ " + preco);
}
 
function calcularParcela(precoTotal, quantidadeParcelas = 1) {
    if (quantidadeParcelas > 12) {
        return precoTotal;
    }
    return precoTotal / quantidadeParcelas;
}
 
function aplicarDesconto(valorTotal, desconto) {
    if (desconto > valorTotal) {
        return 0;
    }
    return valorTotal - desconto;
}
 
function aplicarCupom(valorTotal, cupom) {
    if (cupom === "CUPOM50") {
        return aplicarDesconto(valorTotal, 50);
    } else if (cupom === "CUPOM100") {
        return aplicarDesconto(valorTotal, 100);
    } else if (cupom === "CUPOM200") {
        return aplicarDesconto(valorTotal, 200);
    } else {
        return valorTotal;
    }
}
 
 
let nome = prompt("Digite o nome do produto:");
let precoOriginal = Number(prompt("Digite o preço do produto (R$):"));
 
exibirProduto(nome, precoOriginal);
 
let cupomDigitado = prompt("Digite seu cupom de desconto (ou deixe em branco):");
let precoComDesconto = aplicarCupom(precoOriginal, cupomDigitado);
 
alert("Preço final com cupom: R$ " + precoComDesconto);
 
let parcelas = Number(prompt("Em quantas vezes deseja parcelar? (Máximo 12)"));
let valorDaParcela = calcularParcela(precoComDesconto, parcelas);
 
alert("Sua parcela será de: R$ " + valorDaParcela + " por mês.");