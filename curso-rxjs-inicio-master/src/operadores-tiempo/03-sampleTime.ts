//sampleTime obtener el ultimo valor emitido en un intervalo de tiempo
//permite estar pendiente de las subscripciones en el lapso del tiempo

import { fromEvent } from "rxjs";
import { map, sampleTime, tap } from "rxjs/operators";

const click$=fromEvent<MouseEvent>(document,'click');

click$.pipe(
    sampleTime(3000),
    map(({x,y})=>({x,y})),
    //espera el tiempo y luego    
).subscribe(console.log);