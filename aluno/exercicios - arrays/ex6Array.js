//6. Pódio: declare um array com a classificação final de uma corrida com 
// 6 corredores: `["Ana", "Beto", "Caio", "Duda", "Eva", "Fred"]`. 
// Extraia o pódio (os três primeiros colocados), considerando que eles já estão ordenados. 
// Exiba o pódio da corrida. Obs: utilize o método `slice()`.

let corredores = ["Ana", "Beto", "Caio", "Duda", "Eva", "Fred"];
 
// Extrai os elementos do índice 0 até o 2
let podio = corredores.slice(0, 3);
 
console.log("Pódio da corrida:");
console.log("1º Lugar: " + podio[0]);
console.log("2º Lugar: " + podio[1]);
console.log("3º Lugar: " + podio[2]);
 
// Ou simplesmente exibindo o array do pódio:
console.log("Array do Pódio:", podio);