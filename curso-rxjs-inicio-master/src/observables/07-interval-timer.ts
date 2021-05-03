import {interval, timer } from "rxjs";
const observer={
    next:val=>console.log('next',val),
    complete:()=>console.log('complete')
}
//siempre incia desde cero

//se obtiene propiedades de la fecha actual para lanzar accion 
const hoyEn5=new Date();//ahora
hoyEn5.setSeconds(hoyEn5.getSeconds()+5);

const interval$=interval(1000);
// const timer$ = timer(2000);


//inicia la secuenca cada 1000 segundo pero despues de pasar 2000 segundos
// const timer$ = timer(2000,1000);

const timer$ = timer(hoyEn5);


console.log('inicio')
// interval$.s ubscribe(observer)
timer$.subscribe(observer)
console.log('fin')