import {Empleado} from "./empleado.abstract"

export class EmpleadoTiempocompleto extends Empleado{
    private bonoFijo: number = 20000;

    calcularSalario(): number {
        return this.salarioBase + this.bonoFijo;
    }
}