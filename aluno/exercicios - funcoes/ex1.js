//1. Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. 
// Determine qual o maior entre eles e imprima-o no console.

let num1 = Number (prompt ("O num1 é: "))
let num2 = Number (prompt ("O num2 é: "))
let num3 = Number (prompt ("O num3 é: "))

function encontrarMaior (num1,num2,num3){
    if (num1 >= num2 && num1 >= num3) {
        console.log("O maior número é: " + num1);
    }

    else if(num2 >= num3) {
        console.log("O maior número é: " + num2);
    }

    else {
        console.log("O maior número é: " + num3)
    }
}

encontrarMaior();