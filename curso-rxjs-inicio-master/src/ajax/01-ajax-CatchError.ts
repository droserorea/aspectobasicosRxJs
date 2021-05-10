import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, pluck, subscribeOn } from "rxjs/operators";


//fetchAPI

// const url='https://api.jikan.moe/v3/search/anime?q=sakura';
const url='https://api.github.com/users?per_page=5';

const manejoErrores=(response:Response)=>{
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response;
}


// permite atrapar los errores y acceder a las propiedades que este tiene
//retornando un arreglo vacio desde un observable?
const atrapaError = (err:AjaxError)=>{
    console.warn('error',err.message);
    return of([]);
}

const fetchPromesa=fetch(url);
// fetchPromesa
//     .then(resp=>resp.json())
//     .then(data=>console.log('data',data))
//     .catch(err=>console.warn('error en usr',err))

//peticiones http
// fetchPromesa
//     .then(manejoErrores)
//     .then(resp=>resp.json())
//     .then(data=>console.log('data',data))
//     //para que se dispare en catch es necesario del throw en el manejo de errores
//     .catch(err=>console.warn('error en usr',err))

ajax(url).pipe(
    // map(resp=>resp.reksponse)
    pluck('response'),
    //CatchError sirve para atrapar cualquier error del observable,
    //se puede retornar un mensaje de error o un nuevo observable
    //cuando el nuevo observable termina, termina la emision inicial
    catchError(atrapaError)
).subscribe(users=>console.log('usuarios', users));