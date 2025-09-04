import { Cubo } from "../cubo/cubo.abstract";
import { Pico } from "./pico.abstract";

export class PicoDeMadera extends Pico{
    constructor (){
        super();
        this.danio = 2;
        this.duracion = 10;
        this.nombre = "Pico de Madera";
    }
    picar(cubo: Cubo): void {
        if (this.duracion > 0){
            cubo.minar(this.danio);
            this.duracion -= cubo.getDureza();
        }else{  
            console.log("El pico de madera se ha roto y no puede seguir picando.");

        }
    }
    
}