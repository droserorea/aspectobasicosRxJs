//auditTime emitir el ultimo valor del observable en el perio de tiempo determinado
//en caso que se emita un valor dentro del timepo y el observable termine 
//a la mitad del tiempo no hay emision de valores

import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

const click$=fromEvent<MouseEvent>(document,'click');

click$.pipe(
    map(({x})=>x),
    tap(val=>console.log('tap',val)),
    auditTime(2000)
).subscribe(console.log);