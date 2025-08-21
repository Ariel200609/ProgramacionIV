"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = __importDefault(require("./persona"));
const linkedStack_1 = require("./stack/linkedStack");
const p1 = new persona_1.default("Ariel", "Montoya");
const pila1 = new linkedStack_1.LinkedStack();
pila1.push(1);
pila1.push(2);
try {
    console.log(`
    pop: ${pila1.pop()}
    top: ${pila1.top()}
    size: ${pila1.size()}
    `);
}
catch (error) {
    if (error instanceof Error) {
        console.error("Error al obtener el elemento superior de la pila:", error.message);
    }
}
//# sourceMappingURL=index.js.map