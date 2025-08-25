"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
const figuras_abstract_1 = require("./figuras.abstract");
class Triangulo extends figuras_abstract_1.Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    superficie() {
        return (this.base * this.altura) / 2;
    }
}
exports.Triangulo = Triangulo;
//# sourceMappingURL=triangulo.js.map