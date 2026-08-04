//4. Você está indo de carro para uma nova cidade para uma pequena viagem de 
// fim de semana. Escreva uma função chamada retornarQuantidadeDeGasolina que 
// receba dois números como parâmetros:
//	- o número de quilômetros até o seu destino
//	- o consumo médio em litros por 100 km

// A função deve retornar a quantidade de gasolina necessária para completar toda 
// a viagem de ida e volta.

function retornarQuantidadeDeGasolina(){
    let distanciaTotal = distanciaKm * 2

    let litrosNecessarios = (distanciaTotal / 100) * consumoPor100km;
  
    return litrosNecessarios;
}