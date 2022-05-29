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
        console.log("---------------------------------------------");
        console.log("NOTA FISCAL");
        console.log("Cliente:", this.cliente.getcodigo());
        console.log("Nome:", this.cliente.getnome());
        console.log("CPF/CNPJ:", this.cliente.getcnpjcpf());
        console.log("Data:", this.data);
        console.log("ITENS");
        console.log("Seq | Descrição | QTD | Valor Unitário | Preço");
        console.log("---------------------------------------------");
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            console.log(item.getsequencial(), item.getproduto().getdescricao(), item.getquantidade(), item.getproduto().getvalorUnitario(), item.getvalor());
        }
        console.log("---------------------------------------------");
        console.log("Valor Total:", this.calcularValorNotaFiscal());
    }
}
exports.NotaFiscal = NotaFiscal;
//# sourceMappingURL=nota_fiscal.js.map