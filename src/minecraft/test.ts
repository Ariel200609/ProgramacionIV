import {Cubo} from './cubo/cubo.abstract';
import {CuboDeMadera} from './cubo/cuboDeMadera';
import {CuboDePiedra} from './cubo/cuboDePiedra';
import {Pico} from './pico/pico.abstract';
import {PicoDeMadera} from './pico/picoDeMadera';
import {PicoDePiedra} from './pico/picoDePiedra';

const cuboDeMadera : Cubo = new CuboDeMadera();
const cuboDePiedra : Cubo = new CuboDePiedra();
const picoDeMadera : Pico = new PicoDeMadera();
const picoDePiedra : Pico = new PicoDePiedra();
const picoDePiedra2 : Pico = new PicoDePiedra();

console.log(picoDeMadera.toString());
console.log(cuboDeMadera.toString());
console.log('--- Accion: Picar cubo de madera con pico de madera ---');
picoDeMadera.picar(cuboDeMadera);
console.log(picoDeMadera.toString());
console.log(cuboDeMadera.toString());
picoDeMadera.picar(cuboDePiedra);
picoDeMadera.picar(cuboDePiedra);
picoDeMadera.picar(cuboDePiedra);
picoDeMadera.picar(cuboDePiedra);
console.log(PicoDeMadera.toString());
console.log(cuboDePiedra.toString());