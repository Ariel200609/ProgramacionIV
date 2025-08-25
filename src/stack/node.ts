export class Node <T> {
    constructor(
        public siguiente:Node <T>  | null, // El siguiente nodo en la pila, puede ser nulo si es el último nodo
        public elemento:T
    ){}
}