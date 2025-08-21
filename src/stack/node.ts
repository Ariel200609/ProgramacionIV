export class Node {
    constructor(
        public siguiente:Node  | null, // El siguiente nodo en la pila, puede ser nulo si es el último nodo
        public elemento:number 
    ){}
}