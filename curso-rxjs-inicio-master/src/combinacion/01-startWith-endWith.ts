//StartWith
//las emisiones del observable empiezan con el argumento 
//que se pasa por el StartWith

//EndWith
//al finalizar las emision del subscribe se emite
//el valor que se paso el endWith

import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";

const numeros$= of(1,2,3)
.pipe(
    startWith('a','b','c'),
    endWith('x','y','z')
);
numeros$.subscribe(console.log);


