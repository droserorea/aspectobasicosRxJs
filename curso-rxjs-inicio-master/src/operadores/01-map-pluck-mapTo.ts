import {fromEvent, range} from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators'; 

///---Transformacion de un rago de numeros, con salina tipo string
// range(1,5).pipe(
//     map<number,string>(val=>(val*10).toString())
// ).subscribe(console.log);


//NOTA> colocar el tipo de evento junto al fromEvent permite acceder a
//a las propiedades especificas del evento
const keyup$= fromEvent<KeyboardEvent>(document,'keyup')

const keyupCode$=keyup$.pipe(
    map(event=>event.code)
);

const keyupPluck$=keyup$.pipe(
    //accede a un propieda de nivel 0
    // pluck('key')

    //para el acceso a una propiedad dentro de una propiedad
    //o a un objeto dentro de un objeto para llegar a un atributo
    pluck('target','baseURI')
);

const keyupMapTo$=keyup$.pipe(
    //regresa cualquier tipo de dato desde numero, string u objeto
    // mapTo({v:2,g:3})
    mapTo('Tecla Presionada')
);

keyup$.subscribe(console.log);
keyupCode$.subscribe(code=>console.log('map',code));
keyupPluck$.subscribe(code=>console.log('pluck',code));
keyupMapTo$.subscribe(code=>console.log('mapTo',code));


