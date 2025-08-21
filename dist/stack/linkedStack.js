"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedStack = void 0;
const node_1 = require("./node");
class LinkedStack {
    constructor() {
        this.tam = 0; // Inicializa el tamaño de la pila a 0
        this.head = null; // Inicializa la cabeza de la pila como nula
    }
    //implementar el stack
    push(value) {
        if (this.tam === 0) {
            const nuevoNodo = new node_1.Node(null, value);
            this.head = nuevoNodo; // Si la pila está vacía, el nuevo nodo es la cabeza
            this.tam++;
        }
        else {
            const nuevoNodo2 = new node_1.Node(this.head, value);
            this.head = nuevoNodo2; // Si la pila no está vacía, el nuevo nodo apunta a la cabeza actual
        }
        this.tam++;
    }
    top() {
        if (this.tam === 0) {
            throw new Error("La pila está vacía");
        }
        return this.head.elemento;
    }
    pop() {
        if (this.tam === null) {
            throw new Error("La pila está vacía");
        }
        const aRetornar = this.head;
        if (!aRetornar) {
            throw new Error("La pila está vacía");
        }
        this.head = aRetornar.siguiente; // Mueve la cabeza al siguiente nodo
        aRetornar.siguiente = null; // Desconecta el nodo eliminado
        this.tam--;
        return aRetornar.elemento; // Devuelve el elemento del nodo eliminado
    }
    size() {
        return this.tam; // Devuelve el tamaño actual de la pila
    }
    isEmpty() {
        return this.tam === 0; // Devuelve true si la pila está vacía, false en caso contrario
    }
}
exports.LinkedStack = LinkedStack;
//# sourceMappingURL=linkedStack.js.map