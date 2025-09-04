import { Cubo } from "./cubo.abstract";


export class CuboDeMadera extends Cubo{

    constructor (){
        super();
        this.dureza = 1;
        this.duracion = 15;
        this.nombre = "Cubo de Madera";
    }



    minar(danio: number): void {
        if (this.duracion <= 0){
            console.log("El cubo de madera se ha roto y no puede seguir minando.");
        }else{
            this.duracion -= danio;
        }
        
    }

}
