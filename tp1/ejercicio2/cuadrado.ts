import {FiguraGeometrica} from "./FiguraGeometrica.abstract";

export class Cuadrado extends FiguraGeometrica{
    constructor(private lado:number){
        super("Cuadrado");
    }
    public calcularArea():number{
        return (this.lado* this.lado);
    }
}