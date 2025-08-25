export interface Stack <T> {
    // agrega un elemento nuevo a la pila.
    push(value:T): void;
    top():T;
    pop():T;
    size():number;
    isEmpty():boolean;
}