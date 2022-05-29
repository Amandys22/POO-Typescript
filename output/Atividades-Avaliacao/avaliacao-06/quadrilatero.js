"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadrilatero = void 0;
const ponto_1 = require("./ponto");
class Quadrilatero {
    constructor(a, b) {
        this.a = new ponto_1.Ponto();
        this.b = new ponto_1.Ponto();
        this.a = a;
        this.b = b;
    }
    pertenceArea(p) {
        let maxX = Math.max(this.a.x, this.b.x);
        let maxY = Math.max(this.a.y, this.b.y);
        let minX = Math.min(this.a.x, this.b.x);
        let minY = Math.min(this.a.y, this.b.y);
        return (maxX > p.x && p.x > minX &&
            maxY > p.y && p.y > minY);
    }
}
exports.Quadrilatero = Quadrilatero;
//# sourceMappingURL=quadrilatero.js.map