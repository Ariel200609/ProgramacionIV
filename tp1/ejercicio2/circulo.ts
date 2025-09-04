import {FiguraGeometrica} from "./FiguraGeometrica.abstract";

export class Circulo extends FiguraGeometrica {
    constructor(private radio: number) {
        super("circulo");
    }
    public calcularArea(): number {
        const pi= 3.1416;
        return pi * this.radio * this.radio;
    }
} 

