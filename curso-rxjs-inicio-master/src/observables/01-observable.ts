
import {Observable, Observer} from 'rxjs';

const observer: Observer<any>={
    next: value=>console.log('siguiente [next]',value),
    error: error=>console.warn('error [obs] ', error),
    complete:()=>console.info('completado [obs] ')
};

// const obd$= Observable.create
const obs$=new Observable<string>(subs=>{
    subs.next('Hola');
    //Forzar error
    // const a=undefined;
    // a.nombre='Dcrr'
    // subs.complete();
     //ninguna subscripcion posterios al subs.complete se emite e mi pagina
    subs.next('Hola');
});

// obs$.subscribe(
//     valor=>console.log('next:  ', valor),
//     error=>console.warn('error:  ',error),
//     () => console.info('Complete')
// )

obs$.subscribe(observer);








