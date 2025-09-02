import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { AutoElectrico } from "./AutoElectrico";
import * as readline from "readline-sync"; 

let vehiculo: Auto | Moto | AutoElectrico | null = null;

console.log("=== Vehiculo ===");
const movil = readline.question("(auto/moto/electrico): ");

if (movil.toLowerCase() === "auto") {
  const marca = readline.question("Marca: ");
  const modelo = readline.question("Modelo: ");
  const puertas = readline.questionInt("Cantidad de puertas: ");
  vehiculo = new Auto(marca, modelo, puertas);

} else if (movil.toLowerCase() === "moto") {
  const marca = readline.question("Marca: ");
  const modelo = readline.question("Modelo: ");
  const cilindrada = readline.questionInt("Cilindrada: ");
  vehiculo = new Moto(marca, modelo, cilindrada);

} else if (movil.toLowerCase() === "electrico") {
  const marca = readline.question("Marca: ");
  const modelo = readline.question("Modelo: ");
  const puertas = readline.questionInt("Cantidad de puertas: ");
  const bateria = readline.questionInt("Nivel de bateria (%): ");
  vehiculo = new AutoElectrico(marca, modelo, puertas, bateria);
} else {
  console.log("Opcion no valida");
  process.exit(0);
}

let opcion: number;
do {
  console.log("\n=== MENU ===");
  console.log("1. Encender");
  console.log("2. Apagar");
  console.log("3. Acelerar");
  console.log("4. Frenar");
  console.log("5. Mostrar informacion");
  if (vehiculo instanceof AutoElectrico) {
    console.log("6. Mostrar nivel de bateria");
    console.log("7. Cargar bateria");
    console.log("0. Salir");
  } else {
    console.log("0. Salir");
  }

  opcion = readline.questionInt("Elegi una opcion: ");

  switch (opcion) {
    case 1:
      vehiculo.encender();
      break;
    case 2:
      vehiculo.apagar();
      break;
    case 3:
      vehiculo.acelerar();
      break;
    case 4:
      vehiculo.frenar();
      break;
    case 5:
      vehiculo.mostrarInfo();
      break;
    case 6:
      if (vehiculo instanceof AutoElectrico) {
        vehiculo.mostrarNivelBateria();
      } else {
        console.log("Opcion no valida");
      }
      break;
    case 7:
      if (vehiculo instanceof AutoElectrico) {
        vehiculo.cargarBateria();
      } else {
        console.log("Opcion no valida");
      }
      break;
    case 0:
      console.log("Saliendo...");
      break;
    default:
      console.log("Opcion no valida");
  }
} while (opcion !== 0);
