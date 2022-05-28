"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//----------------------------------------------------------------------------------------
// Importando classe pilha e criando função de iniciar pilha vazia
//----------------------------------------------------------------------------------------
const pilha_1 = require("./pilha");
function criarPilhaVazia() {
    return new pilha_1.Pilha();
}
//----------------------------------------------------------------------------------------
// Criando variáveis que serão usadas no exemplo
//----------------------------------------------------------------------------------------
let pilha = criarPilhaVazia();
let itens = [
    "amanda",
    10,
    10.4,
    [],
    { "chave": "valor" } // object
];
//----------------------------------------------------------------------------------------
// Exemplificando inserção e retirada de itens do objeto Pilha
//----------------------------------------------------------------------------------------
console.log("inserindo items");
for (let i = 0; i < itens.length; i++) {
    pilha.inserir(itens[i]);
    pilha.mostrar();
}
console.log("retirando items");
for (let j = 0; j < pilha.tamanho(); j++) {
    pilha.retirar();
    pilha.mostrar();
}
//# sourceMappingURL=main.js.map