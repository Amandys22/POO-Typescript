import {Ponto} from "./ponto"
import {Quadrilatero} from "./quadrilatero"

let ponto_a = new Ponto(0, 0);
let ponto_b = new Ponto(30, 30);
let quadrilatero = new Quadrilatero(ponto_a, ponto_b);;


let ponto_c = new Ponto(5, 60);
let ponto_d = new Ponto(-6, 3);
let ponto_e = new Ponto(0, 30);
let ponto_f = new Ponto(5, 15);

if(quadrilatero.pertenceArea(ponto_c)){
    console.log("O ponto c pertence a Área do quadrilátero");
} else {
    console.log("O ponto c não pertence a Área do quadrilátero");
}


if(quadrilatero.pertenceArea(ponto_d)){
    console.log("O ponto d pertence a Área do quadrilátero");
} else {
    console.log("O ponto d não pertence a Área do quadrilátero");
}


if(quadrilatero.pertenceArea(ponto_e)){
    console.log("O ponto e pertence a Área do quadrilátero");
} else {
    console.log("O ponto e não pertence a Área do quadrilátero");
}


if(quadrilatero.pertenceArea(ponto_f)){
    console.log("O ponto f pertence a Área do quadrilátero");
} else {
    console.log("O ponto f não pertence a Área do quadrilátero");
}
