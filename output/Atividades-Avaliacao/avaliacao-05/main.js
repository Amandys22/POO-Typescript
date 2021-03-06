"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./cliente");
const tipo_cliente_1 = require("./tipo_cliente");
const produto_1 = require("./produto");
const nota_fiscal_1 = require("./nota_fiscal");
const item_nota_fiscal_1 = require("./item_nota_fiscal");
//Criar uma instancia da classe Cliente 
let cliente = new cliente_1.Cliente(1, "José Maria da Silva", 100, "200.345.987-11", tipo_cliente_1.TipoCliente.PESSOA_FISICA);
console.log("=========================");
console.log(cliente);
console.log("=========================");
console.log("Id=" + cliente.getid());
console.log("Nome=" + cliente.getnome());
console.log("Codigo=" + cliente.getcodigo());
console.log("CnpjCpf=" + cliente.getcnpjcpf());
console.log("TipoCliente=" + cliente.gettipo());
let p1 = new produto_1.Produto(1, 150, "Arroz Tio Joao", 8.00);
let p2 = new produto_1.Produto(2, 200, "Feijão Janjão", 7.00);
let p3 = new produto_1.Produto(3, 300, "Farinha da Boa", 5.50);
let nf = new nota_fiscal_1.NotaFiscal(1, 201, cliente);
let itnf1 = new item_nota_fiscal_1.ItemNotaFiscal(1, 1, 10, p1);
let itnf2 = new item_nota_fiscal_1.ItemNotaFiscal(2, 2, 10, p2);
let itnf3 = new item_nota_fiscal_1.ItemNotaFiscal(3, 3, 10, p3);
itnf1.valorItemNotaFiscal();
itnf2.valorItemNotaFiscal();
itnf3.valorItemNotaFiscal();
console.log("=========================");
console.log(itnf1.getproduto().getdescricao());
console.log(itnf2.getproduto().getdescricao());
console.log(itnf3.getproduto().getdescricao());
console.log("=========================");
nf.adicionarItem(itnf1);
nf.adicionarItem(itnf2);
nf.adicionarItem(itnf3);
console.log("=========================");
console.log(nf);
console.log("=========================");
nf.imprimirNotaFiscal();
//# sourceMappingURL=main.js.map