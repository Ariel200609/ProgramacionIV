"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(siguiente, // El siguiente nodo en la pila, puede ser nulo si es el último nodo
    elemento) {
        this.siguiente = siguiente;
        this.elemento = elemento;
    }
}
exports.Node = Node;
//# sourceMappingURL=node.js.map