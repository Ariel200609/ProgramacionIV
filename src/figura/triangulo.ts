import { Figura } from "./figuras.abstract";    

export class Triangulo extends Figura {
    constructor(
        public base:number,
        public altura:number
    ){
        super();
    }
    public superficie(): number {
        return (this.base * this.altura) / 2;
    }
}