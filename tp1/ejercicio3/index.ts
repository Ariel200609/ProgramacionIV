import { Empleado } from "./empleado.abstract";
import { EmpleadoTiempoCompleto } from "./empleadoMedioTiempo";
import { EmpleadoMedioTiempo } from "./empleadoTiempoCompleto";


const empleados: Empleado[] = [
    new EmpleadoTiempoCompleto("Lucía", 50000),
    new EmpleadoMedioTiempo("Tomás", 40000),
    new EmpleadoTiempoCompleto("Valeria", 60000),
    new EmpleadoMedioTiempo("Mateo", 30000),
];

for (const empleado of empleados) {
    console.log(`${empleado.nombre} cobra $${empleado.calcularSalario()}`);
}