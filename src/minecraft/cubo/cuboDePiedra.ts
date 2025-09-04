import { Cubo } from "./cubo.abstract";


export class CuboDePiedra extends Cubo{

    constructor (){
        super();
        this.dureza = 2;
        this.duracion = 30;
        this.nombre = "Cubo de Piedra";
    }

    minar(danio: number): void {
        if (this.duracion <= 0){
            console.log("El cubo de madera se ha roto y no puede seguir minando.");
        }else{
            this.duracion -= danio;
        }
        
    }

}
