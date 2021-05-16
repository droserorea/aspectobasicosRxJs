//merge - funcion
//recibe 1 o mas observables y conbina las emisiones de salida
//si se compelta el 1er observable no se cancela sino hasta 
//que el ultimo subscribe termine

import { fromEvent, merge } from "rxjs";
import { pluck } from "rxjs/operators";

const keyup$=fromEvent(document,'keyup');
const click$=fromEvent(document,'click');

merge(
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type'))
).subscribe(console.log)

