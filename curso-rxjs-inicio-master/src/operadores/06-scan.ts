//similar al reduce
//num es el valor iniciar del scan
//la salida es immediata y previa a terminal el observable

import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numeros =[1,2,3,4,5];
// const totalAcum=(acc,cur)=>{
//     return acc+cur;
// }

const totalAcum=(acc,cur)=>acc+cur;
//Reduce - una sola emision de salida
from(numeros).pipe(
    reduce(totalAcum,0)
)
.subscribe(console.log);


//Scan
from(numeros).pipe(
    scan(totalAcum,0)
)
.subscribe(console.log);

//Redux, manejar estado goblal de la app en 1objeto
interface Usuario{
    id?:string;
    autenticado?:boolean;
    token?:string;
    edad?:number;
}
const user:Usuario[]=[
    {id:'Diani',autenticado:false,token:null},
    {id:'Diani',autenticado:false,token:'ABC'},
    {id:'Diani',autenticado:false,token:'ABC123'}

] ;
const state$=from(user).pipe(
    scan<Usuario>((acc,cur)=>{
        return{...acc,...cur}
    },{edad:23})
);

const id$=state$.pipe(
    //al acceder a las propiedades de objeto creado se emite
    //los cambios realizados o si no se ha cambiado emite una sola salida
    // map(state=>state.edad)
    map(state=>state.token)
);

id$.subscribe(console.log);