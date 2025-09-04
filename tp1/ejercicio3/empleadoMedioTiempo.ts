import { Empleado } from "./empleado.abstract";

export class EmpleadoMedioTiempo extends Empleado {
    calcularSalario(): number {
        return this.getSalarioBase() * 0.5;
    }
}

