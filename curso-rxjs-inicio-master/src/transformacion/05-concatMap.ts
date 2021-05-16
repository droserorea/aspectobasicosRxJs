//concatMap, crea un subscribe por cada nueva mision en principal
// en este caso se cumple cada uno de los subscribes internos 
//antes de emitir lo que corresponde al siguietne subscribe

import { fromEvent, interval } from "rxjs";
import { concatMap, switchMap, take } from "rxjs/operators";


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document,'click');

click$.pipe(
    //switchMap(()=>interval$)

    //ejecuta en cada click todo el observable completo 
    //termina su ejecucion y emite el siguiente, concatenada uno detras de otro
    concatMap(()=>interval$)
).subscribe(console.log);