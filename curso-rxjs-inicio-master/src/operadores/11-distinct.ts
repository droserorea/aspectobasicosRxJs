//deja pasar los valos que no han sido emitidos 
//previamente por el observable

import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$=of<number|string>(1,'1',1,1,3,3,3,2,2,2,5,4,3,1);
//la emision de string o number identido si se separa como 
//emisiones independientes

numeros$.pipe(
    distinct()
).subscribe(console.log);

interface Personaje{
    nombre:string;
}

const personajes:Personaje[]=[
    {
        nombre:'Megaman'
    },
    {
        nombre:'Zero'
    },
    {
        nombre:'Dr Wiilly'
    },
    {
        nombre:'X'
    },
    {
        nombre:'Megaman'
    },
    {
        nombre:'Zero'
    },
];


//se debe dar informacion especifica de los objetos para usar distinct
//al ser objetos diferentes que apuntan a espacios de memoria diferente
//pero tienen nombres iguales, se debe filtrar por nombre
from(personajes).pipe(
    distinct(p=>p.nombre)
)
.subscribe(console.log)