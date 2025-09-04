import { Animal } from "./animal"
import { Volador } from "./volador"

export class Pajaro extends Animal implements Volador {
  private especie: string

  constructor(nombre: string, especie: string) {
    super(nombre)
    this.especie = especie
  }

  volar(): void {
    console.log("el pajaro vuela")
  }

  hacerSonido(): void {
    console.log("glu glu")
  }
}
