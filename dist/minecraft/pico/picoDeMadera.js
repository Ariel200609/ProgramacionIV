"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicoDeMadera = void 0;
const pico_abstract_1 = require("./pico.abstract");
class PicoDeMadera extends pico_abstract_1.Pico {
    constructor() {
        super();
        this.danio = 2;
        this.duracion = 10;
        this.nombre = "Pico de Madera";
    }
    picar(cubo) {
        if (this.duracion > 0) {
            cubo.minar(this.danio);
            this.duracion -= cubo.getDureza();
        }
        else {
            console.log("El pico de madera se ha roto y no puede seguir picando.");
        }
    }
}
exports.PicoDeMadera = PicoDeMadera;
//# sourceMappingURL=picoDeMadera.js.map