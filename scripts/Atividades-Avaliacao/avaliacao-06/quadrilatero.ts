import {Ponto} from "./ponto"

export class Quadrilatero{
    a: Ponto = new Ponto();
    b: Ponto = new Ponto();

    public constructor(a: Ponto, b: Ponto) {
        this.a = a;
        this.b = b;
    }

    public pertenceArea(p: Ponto): boolean {
        let maxX = Math.max(this.a.x, this.b.x);
        let maxY = Math.max(this.a.y, this.b.y);
        let minX = Math.min(this.a.x, this.b.x);
        let minY = Math.min(this.a.y, this.b.y);

        return (maxX > p.x && p.x > minX && 
                maxY > p.y && p.y > minY);
    }
}