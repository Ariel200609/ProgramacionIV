import {Empleado} from "./empleado.abstract"

class EmpleadoMedioTiempo extends Empleado{
    calcularSalario(): number {
        return this.salarioBase * 0.5;
    }
}

