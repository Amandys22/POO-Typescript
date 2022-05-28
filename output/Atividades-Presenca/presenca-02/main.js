"use strict";
//----------------------------------------------------------------------------------------
// Funções de casting (transformar um tipo de dado em outro)
function printBinario(numero) {
    return numero.toString(2);
}
function printOctal(numero) {
    return numero.toString(8);
}
function printDecimal(numero) {
    return numero.toString(10);
}
function printHexadecimal(numero) {
    return numero.toString(16);
}
//----------------------------------------------------------------------------------------
// Funções principais de montagem da tabela
function printTabela() {
    let todosNumeros = [];
    for (var i = 0; i <= 255; i++) {
        todosNumeros.push(printLinha(i));
    }
    console.table(todosNumeros);
}
function printLinha(numero) {
    let map = {
        "decimal": printDecimal(numero),
        "octal": printOctal(numero),
        "hexadecimal": printHexadecimal(numero),
        "binario": printBinario(numero)
    };
    return map;
}
//----------------------------------------------------------------------------------------
// Chamar função para mostrar tabela na tela
printTabela();
//# sourceMappingURL=main.js.map