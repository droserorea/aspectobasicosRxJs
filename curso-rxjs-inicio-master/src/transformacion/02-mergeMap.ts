//operador de aplanamiento que regresa un nuevo observable
//emite valor productos de la subscripcion interna


import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";

const letras$=of('a','b','c');
letras$.pipe(
    mergeMap((letra)=>interval(1000).pipe(
        map(i=>letra+i),
        take(3)
    ))
)
// .subscribe({
//     next:val=>console.log('next:',val),
//     complete:()=>console.log('complete')
// });

const mousedown$= fromEvent(document,'mousedown');
const mouseup$= fromEvent(document,'mouseup');
const interval$=interval();

mousedown$.pipe(
    //se emite un observable pero como salida no tiene un observable 
    //sino el producto del observable
    mergeMap(()=>interval$.pipe(
        takeUntil(mouseup$)
    ))
)
.subscribe(console.log);

