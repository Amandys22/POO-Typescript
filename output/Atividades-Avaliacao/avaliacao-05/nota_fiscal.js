"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaFiscal = void 0;
class NotaFiscal {
    /* Métodos */
    /* Método Construtor */
    constructor(id, codigo, cliente) {
        this.id = id;
        this.codigo = codigo;
        this.data = new Date();
        this.cliente = cliente;
        this.valorNota = 0.0;
        this.items = new Array();
    }
    /* Métodos Acessores */
    getid() {
        return this.id;
    }
    getcodigo() {
        return this.codigo;
    }
    getdata() {
        return this.data;
    }
    /* Métodos Modificadores */
    setcodigo(codigo) {
        this.codigo = codigo;
    }
    setdata(data) {
        this.data = data;
    }
    adicionarItem(item) {
        this.items.push(item);
    }
    // Percorrer o array items e calcular o valor total da NotaFiscal
    calcularValorNotaFiscal() {
        let valorCalculado = 0;
        for (let i = 0; i < this.items.length; i++) {
            valorCalculado += this.items[i].getvalor();
        }
        return valorCalculado;
    }
    // Imprimir a NotaFiscal conforme o Layout definido
    imprimirNotaFiscal() {
        console.log(`${''.padEnd(110, "-")}`);
        console.log(`${'NOTA FISCAL'.padEnd(90)} ` +
            `${this.data.toLocaleDateString("pt-BR").padEnd(10)} `);
        console.log(`${'Cliente: ' + this.cliente.getcodigo().toString().padEnd(10)}` +
            `${'Nome: ' + this.cliente.getnome().toString().padEnd(50)}`);
        console.log("CPF/CNPJ: ", this.cliente.getcnpjcpf());
        console.log(`${''.padEnd(110, "-")}`);
        console.log("ITENS");
        console.log(`${''.padEnd(110, "-")}`);
        console.log(`${'Seq'.padEnd(10)}` +
            `${'Descrição'.padEnd(60)}` +
            `${'QTD'.padEnd(10)}` +
            `${'Valor Unitário'.padEnd(20)}` +
            `${'Preço'.padEnd(10)}`);
        console.log(`${''.padEnd(9, "-")}` +
            `${' '.padEnd(60, "-")}` +
            `${' '.padEnd(10, "-")}` +
            `${' '.padEnd(20, "-")}` +
            `${' '.padEnd(11, "-")}` +
            '\n');
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            console.log(`${item.getsequencial().toString().padEnd(10)}` +
                `${item.getproduto().getdescricao().toString().padEnd(60)}` +
                `${item.getquantidade().toString().padEnd(10)}` +
                `${item.getproduto().getvalorUnitario().toString().padEnd(20)}` +
                `${item.getvalor().toString().padEnd(20)}`);
        }
        console.log(`${''.padEnd(110, "-")}`);
        console.log("Valor Total: ", this.calcularValorNotaFiscal());
        console.log(`${''.padEnd(110, "-")}`);
    }
}
exports.NotaFiscal = NotaFiscal;
//# sourceMappingURL=nota_fiscal.js.map