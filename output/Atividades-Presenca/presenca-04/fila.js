"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fila = void 0;
class Fila {
    constructor(itens = []) {
        this.itens = new Array;
        this.itens = itens;
    }
    inserir(novoItem) {
        this.itens.push(novoItem);
    }
    retirar() {
        return this.itens.shift();
    }
    mostrar() {
        console.log(JSON.stringify(this.itens));
    }
    tamanho() {
        return this.itens.length;
    }
}
exports.Fila = Fila;
//# sourceMappingURL=fila.js.map