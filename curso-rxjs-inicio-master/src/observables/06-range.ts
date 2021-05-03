import {of, range, asyncScheduler} from 'rxjs'

// const src$ = of (1,2,3,4,5);

//se necesita un numero de inicio, numero de emisions, y opcional un contador
//es un proceso sincrono
//se importa y agrega asyncScheduler para que sea asincrona
const src$ = range (1,5,asyncScheduler);

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');
