
import {Observable, Observer, Subscriber} from 'rxjs';

const observer: Observer<any>={
    next: value=>console.log('siguiente ',value),
    error: error=>console.warn('error ', error),
    complete:()=>console.info('completado ')
};

const intervalo$= new Observable<number>(subscriber=>{
    //crear un contador , 1,2,3,4
    let c=0;
    const interval = setInterval(()=>{
        //cada segundo
        c++;
        subscriber.next(c);
        console.log(c);
    }, 1000);
    setTimeout(()=>{
        subscriber.complete();
    },2500);
    //el observable puede retornar una funcion para que se realice
    //una accion 
    return ()=>{
        clearInterval(interval);
        console.log('Intervalo Destruido');
    }
});

//valores se imprimen a traves del subscribe
//todo lo que retorna el subscribe es una subscripcion
//la subscripcion se mantiene hasta que se cancele la susbcripcion

// const subs=intervalo$.subscribe(num=>console.log('Num: ',num));
const subs1=intervalo$.subscribe(observer);
const subs2=intervalo$.subscribe(observer);
const subs3=intervalo$.subscribe(observer);

//encadenar subscribciones
subs1.add(subs2)
    .add(subs3);

//al generar un ubsubscription se detiene la subscripcion 
setTimeout(()=>{
    //el unsusbcribe no es lo mismo que el complete del observable
    subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()

    console.log('Completado Timeout')

},6000);










