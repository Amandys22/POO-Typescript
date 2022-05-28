"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//----------------------------------------------------------------------------------------
// Importando classe fila
//----------------------------------------------------------------------------------------
const fila_1 = require("./fila");
//----------------------------------------------------------------------------------------
// Criando variáveis que serão usadas no exemplo
//----------------------------------------------------------------------------------------
let fila = new fila_1.Fila();
let itens = [
    "amanda",
    10,
    10.4,
    [],
    { "chave": "valor" } // object
];
//----------------------------------------------------------------------------------------
// Exemplificando inserção e retirada de itens do objeto Fila
//----------------------------------------------------------------------------------------
console.log("inserindo items");
for (let i = 0; i < itens.length; i++) {
    fila.inserir(itens[i]);
    fila.mostrar();
}
console.log("retirando items");
for (let j = 0; j < itens.length; j++) {
    fila.retirar();
    fila.mostrar();
}
//# sourceMappingURL=main.js.map