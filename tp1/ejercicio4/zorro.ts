import { Animal } from "./animal"

export class Zorro extends Animal {
  private especie: string

  constructor(nombre: string, especie: string) {
    super(nombre)
    this.especie = especie
  }

  hacerSonido(): void {
    console.log("guaaa")
  }
}
