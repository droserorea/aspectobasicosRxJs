//funcion forkJoin
//recibe varios observables, deben ser finitos los ibs internos
//retorna el valor de observables cuando se terminan

import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";

const numeros$=of(1,2,3,4);
const interval$=interval(1000).pipe(take(3));//0..1..2
const letras$=of('a','b','c').pipe(delay(3500));

// forkJoin(
//     numeros$,
//     interval$,
//     letras$
// ).subscribe(console.log)

// forkJoin(
//     numeros$,
//     interval$,
//     letras$
// ).subscribe(resp=>{
//     console.log('numeros: ',resp[0])
//     console.log('interval: ',resp[1])
//     console.log('letras: ',resp[2])
// })

forkJoin({
    num: numeros$,
    int: interval$,
    let: letras$,
}).subscribe(resp=>{
    console.log(resp)
});

///? deprecated ?? ---> error con llaves 