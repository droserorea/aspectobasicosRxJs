import { from, fromEvent, range } from "rxjs";
import { filter, map } from 'rxjs/operators';

// range(1,10).pipe(
//     filter(val=>val%2==1)
// ).subscribe(console.log);

range(1,10).pipe(
    filter((val,i)=>{
        console.log('index',i);
        return val%2==1;
    })
)//.subscribe(console.log);

//define de mejor manera al conjuto de personajes-array
interface Personaje{
    tipo:string;
    nombre:string;
}

const personajes:Personaje[]=[
    {
        tipo:'heroe',
        nombre:'batman'
    },
    {
        tipo:'heroe',
        nombre:'robin'
    },
    {
        tipo:'villano',
        nombre:'joker'
    }
]

///usando FILTER mostrar objetos que me pida la condicion
from  (personajes).pipe(
    filter(p=>p.tipo=='heroe')
).subscribe(console.log);



const keyup$=fromEvent <KeyboardEvent>(document,'keyup').pipe(
  map(event=>event.code),//keyboarevent,string
  filter(key=>key=='Enter'),//string, string
  //los operadores se ejecutan de arriba hacia abbajo <<---  
);
keyup$.subscribe(console.log)