let x = 0 // Variáveis auxiliares || Contadores

// Laço infinito
while (x <= 10) {
	console.log(x);

	if (x === 10) {
		break; // Para a execução de um laço de repetição, e prossegue na execução do código
	}

	x = x + 1
}

// Executa primeiro o bloco de código, depois verifica a condição de repetição
do {
	x++ // incremento, operadores unários, -- decrementa
	console.log(x)
} while (x < 100)

// Laço for
for (let cont = -10; cont < 0; cont++) {
	console.log(cont)
}

// 67
for (let c = 0; c <= 100; c++) {
	if (c === 67) {
		continue; // Pula a execução atual do laço de repetição, partindo para a próxima
	}

	console.log(c);
}




