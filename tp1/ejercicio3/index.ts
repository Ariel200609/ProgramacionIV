import { Empleado } from "./empleado.abstract";
import { EmpleadoMedioTiempo } from "./empleadoMedioTiempo";
import { EmpleadoTiempoCompleto } from "./empleadoTiempoCompleto";


const empleados: Empleado[] = [
    new EmpleadoTiempoCompleto("sergio", 50000),
    new EmpleadoMedioTiempo("ramos", 40000),
    new EmpleadoTiempoCompleto("damian", 60000),
    new EmpleadoMedioTiempo("ricardo", 30000),
];

for (const empleado of empleados) {
    console.log(`${empleado.getNombre()} cobra $${empleado.calcularSalario()}`);
}