export interface Stack{
    // agrega un elemento nuevo a la pila.
    push(value:number): void;
    top():number;
    pop():number;
    size():number;
    isEmpty():boolean;
}