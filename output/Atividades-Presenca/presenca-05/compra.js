"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compra = void 0;
class Compra {
    constructor(nome) {
        this.nome = nome;
        this.itens = new Array();
    }
    listarItens() {
        let resultado = "A compra em " + this.nome + " tem os itens:\n";
        this.itens.forEach((item, i) => {
            resultado += (i + 1) + ": " + item.getItemDescricao();
        });
        resultado += "==> Totalizando o valor de: " + this.getValorCompra() + " R$.\n\n";
        return resultado;
    }
    getValorCompra() {
        let total = 0;
        this.itens.forEach((item) => {
            total += item.getValorItem();
        });
        return total;
    }
    addItem(item) {
        this.itens.push(item);
    }
}
exports.Compra = Compra;
//# sourceMappingURL=compra.js.map