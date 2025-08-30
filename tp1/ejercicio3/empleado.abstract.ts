export abstract class Empleado {
    constructor(private nombre: string, private salarioBase: number) {}

    abstract calcularSalario(): number;

    getNombre(): string {
        return this.nombre;
    }

    getSalarioBase(): number {
        return this.salarioBase;
    }
}