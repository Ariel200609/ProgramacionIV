import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
  private cilindrada: number;

  constructor(marca: string, modelo: string, cilindrada: number) {
    super(marca, modelo);
    this.cilindrada = cilindrada;
  }

  public mostrarInfo(): void {
    console.log(
      `Moto: ${this.marca}, año ${this.modelo}, cilindrada: ${this.cilindrada}`
    );
  }
}
