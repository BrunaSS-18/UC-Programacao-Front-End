# Objetos

Os objetos são o tipo de dados mais fundamental do JavaScript, e você já os viu muitas vezes nas aulas anteriores.

Como os objetos são tão importantes para a linguagem JavaScript, é fundamental que você compreenda como eles funcionam em detalhes.

## O que são objetos

Um objeto é um valor composto: ele agrega vários valores (valores primitivos ou outros objetos) e permite armazenar e recuperar esses valores pelo nome.

Um objeto é uma coleção **não ordenada** de propriedades, cada uma das quais possui um **nome** e um **valor**.

## Propriedades 

Os nomes das propriedades são geralmente cadeias de caracteres (embora, como veremos adiante, os nomes das propriedades também possam ser símbolos); portanto, podemos dizer que os objetos mapeiam cadeias de caracteres para valores.

---
Uma propriedade possui um nome e um valor. O nome de uma propriedade pode ser qualquer sequência de caracteres, incluindo a sequência vazia (ou qualquer símbolo), mas nenhum objeto pode ter duas propriedades com o mesmo nome.

Qualquer valor em JavaScript que não seja uma string, um número, um Symbol ou true, false, null ou undefined é um objeto.

---
## Criando objetos

Objetos podem ser criados utilizando objetos literais, o operador new ou com o método Object.create(). Iremos aprender cada uma das formas a seguir.

---
### Criando objetos literais

O jeito mais simples de criação de objetos. De forma simples e resumida, um objeto literal (_object literals_) é uma lista separada por vírgulas (`,`) de nomes e valores, separados por dois pontos (`:`), envolvidos em chaves (`{ }`).

O valor de uma propridade pode ser qualquer expressão ou valor válido em JavaScript.

```js
let vazio = {}; // Um objeto sem propriedades
let ponto = { x: 0, y: 0 }; // Duas propriedades numéricas, x e y
let ponto2 = { x: point.x, y: point.y + 1 }; // Propriedades com valores mais complexos
let book = {
	"titulo": "JavaScript", // These property names include spaces,
	"sub-titulo": "O Guia Definitivo", // and hyphens, so use string literals.
	string: "todos os públicos", // string é uma palavra reservada, mas sem aspas pode ser usada como propriedae
	autor: { // O valor da propriedade autor
		nome: "David", // é também um objeto.
		sobrenome: "Flanagan"
	}
};
```

### Criando objetos com new

O operador `new` cria e inicializa um novo objeto. A palavra-chave `new` deve ser seguida por uma chamada de função. Uma função usada dessa maneira é chamada de construtor e serve para inicializar um objeto recém-criado. O JavaScript inclui construtores para seus tipos embutidos.

```js
let o = new Object(); // Cria um objeto vazio: mesmo que {}.
let a = new Array(); // Cria um objeto vazio: mesmo que [].
let d = new Date(); // Cria um objeto Date representando o horário atual
let r = new Map(); // Cria um objeto Map para mapeamento de chave/valor
```

Em adição aos construtors internos da linguagem, é comum que definamos os nossas próprias funções construtoras para criação de novos objetos.

### Criando objetos com Object.create()

`Object.create()` cria um novo objeto usando o seu primeiro argumento como o protótipo do objeto a ser criado. Exemplo:

```js
let objeto1 = Object.create({x: 1, y: 2}); // objeto1 herda as propriedades x e y.
objeto1.x + objeto1.y // resultado: 3
```

A criação de objetos a partir de protótipos arbitrários é um recurso poderoso da linguagem que exploraremos mais adiante.

## Protótipos

Um objeto é mais do que um simples mapeamento de string para valor, no entanto. Além de manter seu próprio conjunto de propriedades, um objeto JavaScript também herda as propriedades de outro objeto, conhecido como seu “protótipo”.

Os métodos de um objeto são tipicamente propriedades herdadas, e essa “herança prototípica” é uma característica fundamental do JavaScript, que iremos cobrir mais adiante.

---
Todos os objetos criados literalmente (por objetos literais) têm o mesmo objeto protótipo, e podemos nos referir a esse objeto protótipo no código JavaScript como `Object.prototype`.

Os objetos criados usando a palavra-chave `new` e a invocação de um construtor utilizam o valor da propriedade prototype
da função construtora como seu protótipo. Portanto, o objeto criado por `new Object()`  herda de `Object.prototype`, assim como o objeto criado por `{}`.

Da mesma forma, o objeto criado por `new Array()` usa `Array.prototype` como seu protótipo, e
o objeto criado por `new Date()` usa `Date.prototype` como seu protótipo.

---
**Atenção**: isso pode ser confuso quando se está começando a aprender JavaScript. Lembre-se: quase todos os objetos têm um
protótipo, mas apenas um número relativamente pequeno de objetos possui uma propriedade `prototype`. São
esses objetos com propriedades `prototype` que definem os protótipos para todos os outros objetos.

---
`Object.prototype` é um dos raros objetos que não possui protótipo: ele não herda nenhuma propriedade. Outros objetos protótipos são objetos normais que possuem um protótipo. A maioria dos construtores embutidos (e a maioria dos construtores definidos pelo usuário) possui um protótipo que herda de `Object.prototype`. Por exemplo, `Date.prototype` herda propriedades de `Object.prototype`; portanto, um objeto `Date` criado por `new Date()` herda propriedades
tanto de `Date.prototype` quanto de `Object.prototype`. Essa série interligada de objetos protótipos é conhecida como cadeia de protótipos (_prototype chain_).

---
## Acessando valores de propriedades

Para acessar propriedades de um objeto, nós usamos o operador (`.`) ou `[]`.
A esqueda precisamos de um identificador que é um objeto, à direita do ponto ou dentro dos colchetes, entre aspas, o nome do identificador de uma propriedade existente no objeto.

```js
const livro = {
	"titulo": "Dom Casmurro",
	"autor": "Machado de Assis",
	"número ISBN": "9794712283172"
}

console.log( livro.titulo );
console.log( livro.autor );
console.log( livro["número ISBN"] ); // Utilizando [], já que o nome da propriedade possui espaços
```

### Acessando uma propriedade que não existe

Tentar acessar uma propriedade que não existe, irá retornar o valor `undefined`.

```js
livro.edicao // undefined
livro.ano // undefined
```

### Atribuindo valores

Podemos atribuir novos valores mutando nossos objetos, basta utilizarmos o operador de `=`  à direita de uma expressão que seleciona uma propriedade de um objeto (com `.` ou `[]`), exemplo:

```js
livro.titulo = "Recordações do Escrivão Isaías Caminha"
livro.autor  = "Lima Barreto"
livro["número ISBN"] = "98737412358163"
```

### Apagando propriedades

O operador `delete` remove uma propriedade de um objeto. Seu único operando deve ser uma expressão de acesso à propriedade. Surpreendentemente, o `delete` não atua sobre o valor da propriedade, mas sobre a própria propriedade:

```js
delete livro.autor;
delete livro["número ISBN"];
// Após a execução destas linhas, o objeto não terá mais estas propriedades definidas
```

### Verificar se objeto tem propriedade

Muitas vezes iremos lidar com objetos que foram previamente definidos, ou que em determinado trecho de código não temos certeza se uma propriedade existe ou não. Para verificar se um objeto tem uma propriedade, podemos utilizar `hasOwn()` ou o operador `in`.

#### hasOwn

#### operador in

## Métodos

# Referências

FLANAGAN, David. **JavaScript: The Definitive Guide**. 7. ed. Sebastopol: O'Reilly Media, 2020. p. 129-153.
