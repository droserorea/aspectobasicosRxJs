//distinctUntilChange emite valores siempre y cuando la emision 
//anterior  no sea la misma

import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

interface Personaje{
    nombre:string;
}

const personajes:Personaje[]=[
    {
        nombre:'Megaman'
    },
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
    distinctUntilChanged((ant,act)=>ant.nombre==act.nombre)
    //si se cumple seria el boolean True
)
.subscribe(console.log)