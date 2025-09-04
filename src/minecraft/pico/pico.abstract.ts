import  {Cubo} from '../cubo/cubo.abstract.js';

export abstract class Pico{
    protected nombre : string;
    protected danio : number;
    protected duracion : number;
    abstract picar(cubo:Cubo) :void;

    public toString():string{
        return `nombre : ${this.nombre} - Durabilidad: ${this.duracion}`;
    }
}