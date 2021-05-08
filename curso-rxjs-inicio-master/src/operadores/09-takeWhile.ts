//takeWhile, recibe valores mientras la condicion se cumpla
//el observable termina y no emite mas valores

import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$=fromEvent<MouseEvent>(document,'click');

click$.pipe(
    map(({x,y})=>({x,y})),
    // takeWhile(({y})=>y<=150)
    
    //emite el valor que rompe la condicion 
    takeWhile(({y})=>y<=150,true)

)
.subscribe({
    next:val=>console.log('next:', val),
    complete:()=> console.log('complete')
});