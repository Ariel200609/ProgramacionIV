export abstract class Vehiculo {
  protected marca: string;
  protected modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  public encender(): void {
    console.log(`${this.marca} ${this.modelo} esta encendido`);
  }

  public apagar(): void {
    console.log(`${this.marca} ${this.modelo} se apago`);
  }

  public acelerar(): void {
    console.log(`${this.marca} ${this.modelo} esta acelerando...`);
  }

  public frenar(): void {
    console.log(`${this.marca} ${this.modelo} esta frenando...`);
  }
}
