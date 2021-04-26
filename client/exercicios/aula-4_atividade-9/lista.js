function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
exibeNoConsole(listaDeNomes1);
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole(listaDeNomes2);
let listaDeNomes1e2 = listaDeNomes1.concat(listaDeNomes2);
exibeNoConsole(listaDeNomes1e2);

// Pode passar os arrays concatenando direto no parâmetro e adicionando mais 1 item.
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, 'Rômulo'));