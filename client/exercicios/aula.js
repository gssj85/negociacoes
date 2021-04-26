class Aluno {
    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {
    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

let avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

// Altere o código acima para fazer uso de arrow functions.
// Tente ser o mais sucinto possível, em outras palavras, tente escrever a menor quantidade de código.
let aprovados = avaliacoes
    .filter(function(prova) { return prova.nota >= 7; })
    .map(function(prova) { return prova.aluno.nome;});

/**************/
/** Resposta **/
/**************/
let aprovados = avaliacoes
    .filter(prova => prova.nota >= 7)
    .map(prova => prova.aluno.nome);

console.log(aprovados);