"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuadrado = void 0;
const figuras_abstract_1 = require("./figuras.abstract");
class Cuadrado extends figuras_abstract_1.Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    superficie() {
        return (this.base * this.altura);
    }
}
exports.Cuadrado = Cuadrado;
//# sourceMappingURL=cuadrado.js.map