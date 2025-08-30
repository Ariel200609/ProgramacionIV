import { Empleado } from "./empleado.abstract";

export class EmpleadoTiempoCompleto extends Empleado {
    private bonoFijo: number = 20000;

    calcularSalario(): number {
        return this.getSalarioBase() + this.bonoFijo;
    }
}