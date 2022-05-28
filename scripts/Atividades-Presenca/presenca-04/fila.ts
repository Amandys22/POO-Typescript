
export class Fila{ 
    itens: Array<any> = new Array;

    constructor(itens: Array<any> = []){
        this.itens = itens;
    }

    inserir(novoItem: any): void{
        this.itens.push(novoItem);
    }

    retirar(): any{
        return this.itens.shift();
    }

    mostrar(): void{
        console.log(JSON.stringify(this.itens));
    }

    tamanho(): number {
        return this.itens.length;
    }
}
