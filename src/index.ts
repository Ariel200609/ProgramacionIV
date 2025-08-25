import Persona from './persona';
import {LinkedStack} from './stack/linkedStack';
import { Stack } from './stack/stack.interface';
import { Plato } from './stack/plato';
import { Figura } from './figura/figuras.abstract';
import { Cuadrado } from './figura/cuadrado';
import { Triangulo } from './figura/triangulo';



/*
const p1 = new Persona ("Ariel", "Montoya");

const pila1:Stack<number> = new LinkedStack<number>();
pila1.push(1);
pila1.push(2);

try{
    
console.log(`
    pop: ${pila1.pop()}
    top: ${pila1.top()}
    size: ${pila1.size()}
    `);

}catch (error) {
    if (error instanceof Error) {
        console.error("Error al obtener el elemento superior de la pila:", error.message);
    }

}

const pilaPalabra:Stack<string> = new LinkedStack<string>();
pilaPalabra.push("uno");
pilaPalabra.push("dos");
try{
console.log(`
    pop: ${pilaPalabra.pop()}
    top: ${pilaPalabra.top()}
    size: ${pilaPalabra.size()}
    `);
}catch (error) {
    if (error instanceof Error) {
        console.error("Error al obtener el elemento superior de la pila:", error.message);
    }
}

const pilaPlato:Stack<Plato> = new LinkedStack<Plato>();
pilaPlato.push(new Plato("sopero", "naranja"));
pilaPlato.push(new Plato("playo", "verde"));
try{
console.log(`
    pop: ${pilaPlato.pop()}
    top: ${pilaPlato.top()}
    size: ${pilaPlato.size()}
    `);
}
catch (error) {
    if (error instanceof Error) {
        console.error("Error al obtener el elemento superior de la pila:", error.message);
    }
} */

const cuadrado:Figura = new Cuadrado(2,5); 
console.log(cuadrado.superficie());

const triangulo:Figura = new Triangulo(2,5);
console.log(triangulo.superficie());