export abstract class Cubo{
    protected dureza : number;
    protected duracion : number;
    protected nombre : string;
    abstract minar(danio:number):void; 

    public getDureza ():number{
        return this.dureza;
    }

    public toString():string{
        return `nombre : ${this.nombre} - Durabilidad: ${this.duracion}, Dureza: ${this.dureza}`;
    }
}