import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
  private puertas: number;

  constructor(marca: string, modelo: string, puertas: number) {
    super(marca, modelo);
    this.puertas = puertas;
  }

  public mostrarInfo(): void {
    console.log(
      `Auto: ${this.marca}, año ${this.modelo}, con ${this.puertas} puertas`
    );
  }
}
