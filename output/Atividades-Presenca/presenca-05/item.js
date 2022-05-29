"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
    getItemDescricao() {
        let descricao;
        if (this.quantidade > 1) {
            descricao = "O produto " + this.produto.nome + " tem o valor de " + this.produto.preco
                + " R$ e a quantidade é de " + this.quantidade + " produtos.\n";
        }
        else if (this.quantidade === 1) {
            descricao = "O produto " + this.produto.nome + " tem o valor de " + this.produto.preco + " R$.\n";
        }
        else {
            descricao = "Sem itens desse produto na compra.\n";
        }
        return descricao;
    }
    getValorItem() {
        return this.quantidade * this.produto.preco;
    }
}
exports.Item = Item;
//# sourceMappingURL=item.js.map