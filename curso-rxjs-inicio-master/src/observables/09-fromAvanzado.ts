import {of, from} from 'rxjs';
 /**
  * of= toma argumentos y genera una secuencia
  * from=crea un observable en base a un array, promise, iterable, observable
  */

 const observer={
     next: val=> console.log('next', val),
     complete:()=> console.log('complete')
 };

///el astericos en la fun * significa que es generadora
 const miGenerador=function*(){
     //esta funcion emite cada valor que solicite
     yield 1;
     yield 2;
     yield 3;
     yield 4;
     yield 5;
 }
 const miIterable =miGenerador();

//Opcion 1 recorrer la funcion con un for
 //  for(let id of miIterable){
//      console.log(id);
//  }


//Opcion 2 usar un FROM
from(miIterable).subscribe(observer);

 //con el FROM envia cada uno de los valores 
//  const source$=from([1,2,3,4,5]);
// const source$=from('Diana');
//////fecth-> funcion que permite realizar peticion http
const source$=from(fetch('https://api.jikan.moe/v3/search/anime?q=sakura'));


//RXJS SIN USAR FETCH SE PUEDE HACER PETICIONES AJAX

///*** proceso para extraer informacion del api con FETCH
// source$.subscribe(async (resp)=>{
//     console.log(resp);

//     const dataResp= await resp.json();
//     console.log(dataResp);
// });

//con el OF envia el arreglo completo u objeto
//  const source$=of(...[1,2,3,4,5]);


//   source$.subscribe(observer);