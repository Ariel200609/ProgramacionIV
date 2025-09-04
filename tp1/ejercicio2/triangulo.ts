import {FiguraGeometrica} from "./FiguraGeometrica.abstract";

export class Triangulo extends FiguraGeometrica{
    constructor(private base :number,private altura:number,){
        super("Triangulo");
    }
    public calcularArea():number{
        return (this.base * this.altura)/2;
    }
}