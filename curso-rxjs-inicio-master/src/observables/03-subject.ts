
import {Observable, Observer, Subject} from 'rxjs';

const observer: Observer<any>={
    next: value=>console.log('siguiente ',value),
    error: error=>console.warn('error ', error),
    complete:()=>console.info('completado ')
};

const intervalo$= new Observable(subs=>{
    const intervalID= setInterval(
        ()=>subs.next(Math.random()),1000
    );
    return ()=>{
        clearInterval(intervalID);
        console.log('Intervalo destruido')
    }
});


/**
 * 1-casteo multiple , varias subscripciones van a estar sujetas al mismo
 * observable, se conserva la inforacion en vatios lugares
 * 2-tambien es un observer
 * 3-next, error, y complete 
 */

//creacion de l Subject
const subject$= new Subject();
const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe(rnd=>console.log('subs1',rnd));
// const subs2 = intervalo$.subscribe(rnd=>console.log('subs2',rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

/**
 *Cuando la data es producida por el observable en si mismo
 *es considerado un COLD OBSERVABLE
 *Cuadno la data es producidafuera del Observable se llama HOT OBSERVABLE
 */

 setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();

 },3500);