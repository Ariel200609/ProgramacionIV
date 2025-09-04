"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuboDePiedra = void 0;
const cubo_abstract_1 = require("./cubo.abstract");
class CuboDePiedra extends cubo_abstract_1.Cubo {
    constructor() {
        super();
        this.dureza = 2;
        this.duracion = 30;
        this.nombre = "Cubo de Piedra";
    }
    minar(danio) {
        if (this.duracion <= 0) {
            console.log("El cubo de madera se ha roto y no puede seguir minando.");
        }
        else {
            this.duracion -= danio;
        }
    }
}
exports.CuboDePiedra = CuboDePiedra;
//# sourceMappingURL=cuboDePiedra.js.map