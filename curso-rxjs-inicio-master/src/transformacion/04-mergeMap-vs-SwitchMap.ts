import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";


const click$ = fromEvent(document,'click');
const interval$=interval(1000);
click$.pipe(
    //mergeMap(()=>interval$) //mantiene varias subscripcion internas activas
    switchMap(()=>interval$) //mantiene solo 1 subscripcion interna activa
).subscribe(console.log);

