//emite unicamente el valor dentro del tiempo establecido
//aquellos valores que se envien para emitir antes del tiempo son ignorados
//emite el valor primero y pues espera el tiempo definido para el siguiente
import { asyncScheduler, fromEvent } from "rxjs";
import { distinctUntilChanged, map, pluck, throttleTime } from "rxjs/operators";

const click$=fromEvent(document,'click');
click$.pipe(
    throttleTime(3000)
)//.subscribe(console.log);

//Ejemplo 2
const input=document.createElement('input');
document.querySelector('body').append(input);

const input$=fromEvent(input,'keyup');
input$.pipe(
    throttleTime(1000,asyncScheduler,{
        leading:false,
        trailing:true
    }),
    pluck('target','value'),
    distinctUntilChanged()
)
.subscribe(console.log);