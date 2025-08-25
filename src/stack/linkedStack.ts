import { Stack } from './stack.interface';
import { Node } from './node';

export class LinkedStack <T>  implements Stack <T>{
    public head: Node <T> | null; // La cabeza de la pila, puede ser nula si la pila está vacía
    public tam:number;
    constructor() {
        this.tam = 0; // Inicializa el tamaño de la pila a 0
        this.head = null; // Inicializa la cabeza de la pila como nula
    }
    //implementar el stack
    public push(value: T): void {
        if (this.tam ===0){
            const nuevoNodo = new Node(null, value);
            this.head = nuevoNodo; // Si la pila está vacía, el nuevo nodo es la cabeza
            this.tam++;
        }
        else{
            const nuevoNodo2= new Node (this.head, value);
            this.head = nuevoNodo2; // Si la pila no está vacía, el nuevo nodo apunta a la cabeza actual
        }
        this.tam++;
        
    }
    public top(): T {
        if (this.tam===0){
            throw new Error("La pila está vacía");
        }
        return this.head!.elemento;
    }
    public pop(): T {
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
    public size(): number {
        return this.tam; // Devuelve el tamaño actual de la pila
    }
    public isEmpty(): boolean {
        return this.tam === 0; // Devuelve true si la pila está vacía, false en caso contrario
    }
}