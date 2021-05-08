//distinctUntilKeyChange emite valores siempre y cuando la emision 
//anterior  no sea la misma en los objetos aplica con las propiedades

import { from } from "rxjs";
import {  distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

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

from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log)