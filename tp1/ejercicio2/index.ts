import { FiguraGeometrica } from "./FiguraGeometrica.abstract";
import {Triangulo} from "./triangulo";
import {Cuadrado} from "./cuadrado";
import {Circulo} from "./circulo";

const figuras: FiguraGeometrica[] = [
    new Cuadrado(5),
    new Triangulo(4, 3),
    new Circulo(2)
];

for (const figura of figuras) {
    console.log(`${figura.getNombre()} → Área: ${figura.calcularArea()}`);
}
