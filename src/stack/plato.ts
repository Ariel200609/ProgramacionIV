export class Plato{
    constructor(
        public tipo:string,
        public color:string
    ){

    }
    toString():string{
        return `Plato: {tipo: ${this.tipo} - color: ${this.color}}`;
    }
}