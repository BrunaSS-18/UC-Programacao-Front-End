# Exercícios

## Objetos

Faça os exercícios a seguir escrevendo código JavaScript a ser vinculado à sua página HTML com a tag `<script>`.

### Essenciais

1. Escreva um programa que declara dois objetos literais `produto`, com as propriedades `nome (string)`, `preco (number)`, `categoria (string | "Laticínios", "Hortifruti", "Pães", "Bebidas", etc.)`. Escreva uma função que recebe dois produtos como parâmetros e exibe no console qual é o produto mais caro, seu nome e categoria.

2. Escreva um programa que declara um objeto literal `aluno`, com as propriedades `nome, idade, curso` e `notas`, que deve ser um array de _n_ números de 0 a 10. Escreva uma função que recebe o objeto como parâmetro e calcula a média de nota do aluno, independente de quantos elementos sua propriedade `notas` possui.
	- Adicione a propriedade `media` ao objeto, com o valor da média que foi calculada;

3. Escreva um programa que declara um objeto carro, com as propriedades `nome (string)`, `cor (string)`, `modelo (string)` e `opcionais (object)`, contendo `ar condicionado (boolean)`, `direção helétrica (boolean)` e `multimídia (boolean)`.
	- Escreva uma função que recebe o carro como parâmetro e exibe seus detalhes
	- Escreva uma função que recebe o carro (`object`), o nome de um opcional (`string`) e um booleano como parâmetro para adicionar/remover um opcional do carro