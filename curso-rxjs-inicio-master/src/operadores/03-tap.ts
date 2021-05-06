import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numeros$=range(1,5);
numeros$.pipe(
    tap(x=>{
        console.log('antes',x);
        return 100;
    }),
    map(val=>val*10),
    tap({
        next: valor=>console.log('despues',valor),
        //se ejecuta cada vez que el tap reciba el sig valor
        complete:()=>console.log('se termino todo')
        //se dispara cuando todo el observable se complete
        //desde inicio al final se eejecuta antes de aparacer el complete
    })
).subscribe(val=>console.log('subs',val));