import Persona from './persona';
import {LinkedStack} from './stack/linkedStack';
import { Stack } from './stack/stack.interface';



const p1 = new Persona ("Ariel", "Montoya");

const pila1:Stack = new LinkedStack();
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

