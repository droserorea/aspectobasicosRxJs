//debounceTime contar milesismas de seg desde la ultima emision
//ayuda a restringir el numero de emisiones

import { fromEvent } from "rxjs";
import { debounce, debounceTime, distinctUntilChanged, map, pluck } from "rxjs/operators";

const click$=fromEvent(document,'click');
click$.pipe(
    debounceTime(3000)
)//.subscribe(console.log);

//Ejemplo 2
const input=document.createElement('input');
document.querySelector('body').append(input);

const input$=fromEvent(input,'keyup');
input$.pipe(
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged()
)
.subscribe(console.log);