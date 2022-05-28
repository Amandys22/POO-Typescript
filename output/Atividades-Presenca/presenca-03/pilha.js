"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilha = void 0;
class Pilha {
    constructor(itens = []) {
        this.itens = new Array;
        this.itens = itens;
    }
    inserir(novoItem) {
        this.itens.push(novoItem);
    }
    retirar() {
        return this.itens.pop();
    }
    mostrar() {
        console.log(JSON.stringify(this.itens));
    }
    tamanho() {
        return this.itens.length;
    }
}
exports.Pilha = Pilha;
//# sourceMappingURL=pilha.js.map