class Codigo {

    constructor(codigo) {

        if (!/\D{3}-\D{2}-\d{2}/.test(codigo))
            throw new Error('Código inválido!');

        this._codigo = codigo;
        alert('Código válido!');
    }
}


// 'GWZ-JJ-12' - Código válido
// '1X1-JJ-12' - Código inválido