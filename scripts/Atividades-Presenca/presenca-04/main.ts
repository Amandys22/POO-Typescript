//----------------------------------------------------------------------------------------
// Importando classe fila
//----------------------------------------------------------------------------------------
import {Fila} from "./fila";

//----------------------------------------------------------------------------------------
// Criando variáveis que serão usadas no exemplo
//----------------------------------------------------------------------------------------
let fila = new Fila()
let itens: Array<any> = [
    "amanda",               // string
    10,                     // number int
    10.4,                   // number float
    [],                     // array
    {"chave": "valor"}      // object
]

//----------------------------------------------------------------------------------------
// Exemplificando inserção e retirada de itens do objeto Fila
//----------------------------------------------------------------------------------------
console.log("inserindo items")

for(let i = 0; i < itens.length; i++){
    fila.inserir(itens[i]);
    fila.mostrar();
}

console.log("retirando items")

for(let j = 0; j < itens.length; j++){
    fila.retirar();
    fila.mostrar();
}
