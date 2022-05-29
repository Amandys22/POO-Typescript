"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//----------------------------------------------------------------------------------------
// Importando classes Ponto e Quadrilatero
//----------------------------------------------------------------------------------------
const ponto_1 = require("./ponto");
const quadrilatero_1 = require("./quadrilatero");
//----------------------------------------------------------------------------------------
// Criando objetos para a testagem
//----------------------------------------------------------------------------------------
let ponto_a = new ponto_1.Ponto(0, 0);
let ponto_b = new ponto_1.Ponto(30, 30);
let quadrilatero = new quadrilatero_1.Quadrilatero(ponto_a, ponto_b);
let ponto_c = new ponto_1.Ponto(5, 60); // meio interno meio externo
let ponto_d = new ponto_1.Ponto(-6, 3); // externo
let ponto_e = new ponto_1.Ponto(0, 30); // perímetro
let ponto_f = new ponto_1.Ponto(5, 15); // pertence
//----------------------------------------------------------------------------------------
// Exemplificando checagem de pontos no quadrilátero
//----------------------------------------------------------------------------------------
if (quadrilatero.pertenceArea(ponto_c)) {
    console.log("O ponto c pertence a Área do quadrilátero");
}
else {
    console.log("O ponto c não pertence a Área do quadrilátero");
}
if (quadrilatero.pertenceArea(ponto_d)) {
    console.log("O ponto d pertence a Área do quadrilátero");
}
else {
    console.log("O ponto d não pertence a Área do quadrilátero");
}
if (quadrilatero.pertenceArea(ponto_e)) {
    console.log("O ponto e pertence a Área do quadrilátero");
}
else {
    console.log("O ponto e não pertence a Área do quadrilátero");
}
if (quadrilatero.pertenceArea(ponto_f)) {
    console.log("O ponto f pertence a Área do quadrilátero");
}
else {
    console.log("O ponto f não pertence a Área do quadrilátero");
}
//# sourceMappingURL=main.js.map