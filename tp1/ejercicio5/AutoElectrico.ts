import { Auto } from "./Auto";
import { Electrico } from "./Electrico";

export class AutoElectrico extends Auto implements Electrico {
  private bateria: number;

  constructor(marca: string, modelo: string, puertas: number, bateria: number) {
    super(marca, modelo, puertas);
    this.bateria = bateria;
  }

  public cargarBateria(): void {
    this.bateria = 100;
    console.log(`La batería ha sido cargada al 100%.`);
  }

  public mostrarNivelBateria(): void {
    console.log(`Nivel de bateria: ${this.bateria}%`);
  }
}
