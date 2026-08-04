//2. Escreva uma função chamada `concatenar3` que aceita 4 parâmetros, 
// sendo os três primeiros palavras a serem concatenadas, 
// e o quarto o separador que será utilizado entre elas. 
// Retorne as palavras concatenadas, com o separador entre elas. 
// Defina o valor padrão do parâmetro separador como `“ | “`.

function concatenar3 (p1, p2, p3, seprador = " | ") {
    return p1 + seprador + p2 + seprador + p3;
}

concatenar3("Bruna", "Kauana", "Luiza")