//first()=>>  emite solo la primera emision del observable 
//aunque el mismo se siga ejecutando
// en caso de existir condicion se emiten los valores 
//hasta que se cumpla la condicion 

import { fromEvent } from "rxjs";
import { first, map, take, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document,'click');
click$.pipe(
    //mismo efecto first() con take(1)
    //primer emision cuya condicion se cumpla
    
    //tap(()=>console.log('tap')),
    tap<MouseEvent>(console.log),


    // map(event=>({
    //     clientY: event.clientY,
    //     clientX:event.clientX
    // }))
    map(({clientX,clientY})=>({clientY,clientX})),
    first(event=>event.clientX>=150)
)
.subscribe({
    next:val=>console.log('next ',val),
    complete:()=>console.log('complete')
});

