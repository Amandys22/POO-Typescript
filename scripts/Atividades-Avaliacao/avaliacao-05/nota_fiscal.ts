
import {Cliente} from "./cliente";
import {ItemNotaFiscal} from "./item_nota_fiscal";
export class NotaFiscal {

    /* Atributos */
    id: number;
    codigo:number; 
    data: Date;
    cliente: Cliente;
    items :  Array<ItemNotaFiscal>;  
    valorNota : number;

    /* Métodos */

    /* Método Construtor */    
    constructor (id : number, codigo: number, cliente : Cliente ) {
        this.id = id;
        this.codigo = codigo;
        this.data = new Date(); 
        this.cliente = cliente; 
        this.valorNota =0.0;
        this.items = new Array<ItemNotaFiscal>();
    }

    /* Métodos Acessores */
    getid(): number {
        return this.id;
    }

    getcodigo(): number {
        return this.codigo;
    }

    getdata(): Date {
        return this.data;
    }

    /* Métodos Modificadores */     
    setcodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setdata(data : Date) : void {
        this.data = data;
    }

    adicionarItem(item: ItemNotaFiscal) {
        this.items.push(item);
    }

    // Percorrer o array items e calcular o valor total da NotaFiscal
    calcularValorNotaFiscal() : number {
        let valorCalculado = 0;

        for(let i = 0; i < this.items.length; i++) {    
            valorCalculado += this.items[i].getvalor();
        }

        return valorCalculado;
    }

    imprimirNotaFiscal(): void {

        console.log( `${''.padEnd(110, "-")}`);
        console.log(
            `${'NOTA FISCAL'.padEnd(90)} ` +
            `${this.data.toLocaleDateString("pt-BR").padEnd(10)} ` 
        );

        console.log(
            `${'Cliente: ' + this.cliente.getcodigo().toString().padEnd(10)}` +
            `${'Nome: '    + this.cliente.getnome().toString().padEnd(50)}`
        );
        
        console.log("CPF/CNPJ: ", this.cliente.getcnpjcpf());
        console.log( `${''.padEnd(110, "-")}`);
        console.log("ITENS");
        console.log( `${''.padEnd(110, "-")}`);

        console.log(
            `${'Seq'.padEnd(10)}` +
            `${'Descrição'.padEnd(60)}` +
            `${'QTD'.padEnd(10)}` +
            `${'Valor Unitário'.padEnd(20)}` +
            `${'Preço'.padEnd(10)}`
        );
        
        
        console.log(
            `${''.padEnd(9, "-")}` +
            `${' '.padEnd(60, "-")}` +
            `${' '.padEnd(10, "-")}` +
            `${' '.padEnd(20, "-")}` +
            `${' '.padEnd(11, "-")}` +
            '\n'
        );


        for(let i = 0; i<this.items.length; i++) {
            let item: ItemNotaFiscal = this.items[i];
            console.log(
                `${item.getsequencial().toString().padEnd(10)}` +
                `${item.getproduto().getdescricao().toString().padEnd(60)}` +
                `${item.getquantidade().toString().padEnd(10)}` +
                `${item.getproduto().getvalorUnitario().toString().padEnd(20)}` +
                `${item.getvalor().toString().padEnd(20)}` 
            );
        }
        
        console.log( `${''.padEnd(110, "-")}`);
        console.log("Valor Total: ", this.calcularValorNotaFiscal())
        console.log( `${''.padEnd(110, "-")}`);
    }
}