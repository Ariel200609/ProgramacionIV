"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicoDePiedra = void 0;
const pico_abstract_1 = require("./pico.abstract");
class PicoDePiedra extends pico_abstract_1.Pico {
    constructor() {
        super();
        this.danio = 5;
        this.duracion = 20;
        this.nombre = "Pico de Piedra";
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
exports.PicoDePiedra = PicoDePiedra;
//# sourceMappingURL=picoDePiedra.js.map