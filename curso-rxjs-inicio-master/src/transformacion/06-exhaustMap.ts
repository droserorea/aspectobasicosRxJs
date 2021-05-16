//exhaustMap ignora aquellas subscripciones internas 
//que ingresan mientras se emiten los valores de la subscripcion previa
//practicamente ignora esa subscripcion y cuando termina las emisiones anteriores
//toma las subscripciones que se emitan 

//mantiene solo 1 subscripcion activa hasta que se complete


import { fromEvent, interval } from "rxjs";
import { concatMap, exhaustMap, switchMap, take } from "rxjs/operators";


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document,'click');

click$.pipe(
    exhaustMap(()=>interval$)
).subscribe(console.log);