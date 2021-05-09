//sample --> emite ultimo valor del observables hasta que 
//el otro observable emita un valor
//si el segundo observable no se dispara no al salida del 1er observable 
//ademas si en el 1er observable no hay ningun valor 
//y se emite el 2do no hay emision alguna

import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

const interval$=interval(500);
const click$=fromEvent(document,'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log)