"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayStack = void 0;
class ArrayStack {
    constructor() {
        this.contenedor = new Array();
        this.tam = 0;
    }
    isEmpty() {
        throw new Error('Method not implemented.');
    }
    push(value) {
        this.contenedor[this.tam++] = value;
    }
    top() {
        if (this.tam <= 0) {
            throw new Error("La pila está vacía");
        }
        else if (this.contenedor[this.tam - 1] === undefined) {
            throw new Error("error valor undefined");
        }
        return this.contenedor[this.tam - 1];
    }
    pop() {
        if (this.tam === 0) {
            throw new Error("La pila está vacía");
        }
        const aRetornar = this.contenedor[this.tam - 1];
        this.tam--;
        return aRetornar;
    }
    size() {
        return this.tam;
    }
}
exports.ArrayStack = ArrayStack;
//# sourceMappingURL=arrayStack.js.map