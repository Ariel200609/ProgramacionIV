interface Animal {
    hacerSonido(): void;
    moverse(): void;
}

class Perro implements Animal {
    Nombre?: string | undefined;  // por si le queres agregar un nombre al pobre perrito... 
    constructor(nombre?: string) {
        this.Nombre = nombre;
    }
    hacerSonido(): void {
        if (this.Nombre){
            console.log(`${this.Nombre} Ladraa!! : `);
            console.log(`Guau!`);
        } else {
            console.log("Guau!");
        }
    }

    moverse(): void {
        if (this.Nombre) {
            console.log(`${this.Nombre} corre felizmente.`);
        } else {
            console.log("El perro corre");
        }
    }
}

//perro sin nombre:(
console.log ("===Perrito===");
const miPerro = new Perro;
miPerro.hacerSonido();
miPerro.moverse();

//perrito con nombre :)
console.log ("====Perrito2====")
const miPerroQuerido = new Perro ("Ramito");
miPerroQuerido.hacerSonido();
miPerroQuerido.moverse();
