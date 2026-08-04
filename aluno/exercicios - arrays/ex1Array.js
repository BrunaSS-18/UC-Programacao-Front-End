//1. **Fila de atendimento**: crie um array que armazene pessoas em uma 
// fila de atendimento, inicialmente com 3 pessoas (nomes). 
// Adicione mais 1 pessoa ao final da fila e exiba a fila utilizando 
// for (usando um contador e propriedade `length`). 
// Remova a pessoa do início da fila e exiba-a novamente no console.

let fila = ['Bruna', 'Luiza', 'Kauana']

fila.push('Murilo')

for (i = 0; i < fila.length; i++){
    console.log(fila[i]);
}

fila.shift("Bruna")

console.log(fila);