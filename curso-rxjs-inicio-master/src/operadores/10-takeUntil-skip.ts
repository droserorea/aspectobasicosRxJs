//takeUntil recibe observable como argumento
//emite los valores del observable 1 hasta que
//el observable dos emita su evento terminando asi el 1er observable

import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const boton=document.createElement('button');
boton.innerHTML='Detener Timer';

document.querySelector('body').append(boton);


const counter$=interval(1000);
// const clickBtn$=fromEvent(boton,'click')

//Skip---> emite el valor a partir de la posicion que se escribe
//si es skip(2) los 2 primeros valores no se emiten el 3ro si
const clickBtn$=fromEvent(boton,'click').pipe(
    tap(()=>console.log('tap antes')),
    skip(2),
    tap(()=>console.log('tap despues')),
)


counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next:val=>console.log('next',val),
    complete:()=>console.log('complete')
});

