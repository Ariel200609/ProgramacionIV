import { Cubo } from "../cubo/cubo.abstract";
import { Pico } from "./pico.abstract";

export class PicoDePiedra extends Pico{
    constructor (){
        super();
        this.danio = 5;
        this.duracion = 20;
        this.nombre = "Pico de Piedra";
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