abstract class FiguraGeometrica {
    protected nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract calcularArea(): number;

    getNombre():string {
        return this.nombre;
    }
}