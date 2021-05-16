//funcionConcat
//recibe como argumentos observables
//la emesion de los observables es consecutiva, si un observable jamas se completa 
//no se emitira el complete, practicamente ejecuta un observable tras completar un anterior

import { concat, interval, of } from "rxjs";
import { take } from "rxjs/operators";

const interval$= interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    //[1,2,3,4]
    of(1)
).subscribe(console.log)