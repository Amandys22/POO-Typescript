"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco > 0 ? preco : 0;
    }
}
exports.Produto = Produto;
//# sourceMappingURL=produto.js.map