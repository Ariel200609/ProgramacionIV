"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuboDeMadera = void 0;
const cubo_abstract_1 = require("./cubo.abstract");
class CuboDeMadera extends cubo_abstract_1.Cubo {
    constructor() {
        super();
        this.dureza = 1;
        this.duracion = 15;
        this.nombre = "Cubo de Madera";
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
exports.CuboDeMadera = CuboDeMadera;
//# sourceMappingURL=cuboDeMadera.js.map