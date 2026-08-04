//2.Validação números: crie uma função que recebe um array e 
// percorre-o (`for` ou `for...of`), verificando se os valores armazenados
// são números. Armazene os valores que são números em um novo array e 
// retorne-o na função.

function numerosArmazenados (array) {
    let numeros = []

    for(let b of array){
        if(typeof b === "number"){
            numeros.push(b)
        }

    }

     return numeros
}

let valores = ['bruna', 18, 'GTI']

console.log(numerosArmazenados(valores))