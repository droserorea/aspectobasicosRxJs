import { of } from 'rxjs';
import{ajax, AjaxError}from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
const url='https://httpbinX.org/delay/1';
// const url='https://api.github.com/users?per_page=5';

//se puede ver la data que se envia con la POST,PUT,DELETE
//juntos con sus headers
//enviar nueva informacion a los headers

const manajeError=(resp:AjaxError)=>{
    console.warn('error:', resp.message)
    return  of({
        ok:false,
        usuario:[]
    });
}

// const obs$=ajax.getJSON(url).pipe(
//     catchError(manajeError)
// );
// const obs2$=ajax(url).pipe(
//     catchError(manajeError)
// );



const obs$=ajax.getJSON(url).pipe(
    catchError(manajeError)
);
const obs2$=ajax(url).pipe(
    catchError(manajeError)
);

// obs2$.subscribe(data=>console.log('ajax',data));
//Opcion 2 para manejo de catch error
//al lanzar el error, el catch lo atrapa y emite el return
//siendo un nuevo observable vacio,
//permitiendo que este ultimo se ejecute por completo
obs$.pipe(
    catchError(manajeError)
)
.subscribe({
    next: val=> console.log('next',val),
    error: err=> console.warn('error en susbs',err),
    complete:()=> console.log('complete')
});
