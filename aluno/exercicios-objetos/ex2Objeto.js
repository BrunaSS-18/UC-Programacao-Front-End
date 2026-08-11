const aluno = {
    nome: "Bruna",
    idade: 20,
    curso: "GTI",
    notas: [10, 9, 8, 9, 7]
}

function media (notaAluno) {
    let soma = 0

    for(i = 0; i < notaAluno.notas.length; i++){
        soma = soma + notaAluno.notas[i];
    }

    notaAluno.media = soma/notaAluno.notas.length;
}

media(aluno)

console.log(aluno)