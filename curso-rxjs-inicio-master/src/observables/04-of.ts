import {of} from 'rxjs';

// const obs$=of(1,2,3,4,5,6);
const obs$=of<number>(...[1,2,3,4,5,6],2,3,4,5,6);

// const obs$=of([1,2],{a:1,b:2},function(){}, true, Promise.resolve(true));


//los observables trabajan de manera sincrona
console.log('Inicio del Obs$')
obs$.subscribe(
    next=>console.log('next',next),
    null,
    ()=>console.log('Termina Secuencia')
);
console.log('Fin del Observable')
