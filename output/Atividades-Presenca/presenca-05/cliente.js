"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome) {
        this.nome = nome;
        this.compras = new Array();
    }
    listarCompras() {
        let resultado = "Compras do(a) Cliente: " + this.nome + ".\n\n";
        this.compras.forEach((compra) => {
            resultado += compra.listarItens();
        });
        resultado += "O valor Total das compras de " + this.nome + " foi de " + this.getValorTotal()
            + " R$.\n";
        resultado += "### Obrigado por comprar com a gente!! ###";
        return resultado;
    }
    getValorTotal() {
        let total = 0;
        this.compras.forEach((compra) => {
            total += compra.getValorCompra();
        });
        return total;
    }
    addCompra(compra) {
        this.compras.push(compra);
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map