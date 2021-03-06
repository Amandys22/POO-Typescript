//----------------------------------------------------------------------------------------
// Importando classe pilha
//----------------------------------------------------------------------------------------
import {Pilha} from "./pilha";

//----------------------------------------------------------------------------------------
// Criando variáveis que serão usadas no exemplo
//----------------------------------------------------------------------------------------
let pilha = new Pilha()
let itens: Array<any> = [
    "amanda",               // string
    10,                     // number int
    10.4,                   // number float
    [],                     // array
    {"chave": "valor"}      // object
]

//----------------------------------------------------------------------------------------
// Exemplificando inserção e retirada de itens do objeto Pilha
//----------------------------------------------------------------------------------------
console.log("inserindo items")

for(let i = 0; i < itens.length; i++){
    pilha.inserir(itens[i]);
    pilha.mostrar();
}

console.log("retirando items")

for(let j = 0; j < itens.length; j++){
    pilha.retirar();
    pilha.mostrar();
}
