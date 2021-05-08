// no hay ninguna mesion hasta que el observable se termine

import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const numbers=[1,2,3,4,5,6];
const totalReducer=(acumulador:number, valActual:number)=>{
    return acumulador+valActual;
}

const total=numbers.reduce(totalReducer,0)
console.log('total arr',total);

interval(1000).pipe(
    //take completa el observables despues de la especificacion 
    take(3),
    //like  a sout print
    tap(console.log),
    //sumatoria del acumulador + la constante despues de la coma
    reduce(totalReducer,15)
)
.subscribe({
    next: val=>console.log('next',val),
    complete:()=>console.log('complete')
})