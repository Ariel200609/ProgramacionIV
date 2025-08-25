import { Stack } from './stack.interface';

export class ArrayStack<T> implements Stack <T>{
    private contenedor: Array<T>; 
    private tam:number;

    constructor() {
        this.contenedor = new Array<T>();
        this.tam = 0;
    }
    isEmpty(): boolean {
        throw new Error('Method not implemented.');
    }
    push (value: T): void {
        this.contenedor[this.tam++] = value;
    }
    top():T {
        if (this.tam <= 0) {
            throw new Error("La pila está vacía");
        }else if (this.contenedor[this.tam - 1] === undefined){
            throw new Error("error valor undefined");
        }
        return this.contenedor[this.tam - 1];
    }
    pop ():T {
        if (this.tam === 0) {
            throw new Error("La pila está vacía");
        }
        const aRetornar: T = this.contenedor[this.tam-1];
        this.tam --;
        return aRetornar;
    }
    size():number {
        return this.tam;
    }
    

    
}