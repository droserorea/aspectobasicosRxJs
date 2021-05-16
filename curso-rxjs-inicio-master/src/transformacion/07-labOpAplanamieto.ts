

//formulario

import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, concatMap, exhaustMap, map, mergeMap, pluck, switchMap, tap } from "rxjs/operators";

const form= document.createElement('form');
const inputEmail=document.createElement('input');
const inputPass=document.createElement('input');
const submitBtn=document.createElement('button');


//helper
const peticionHttpLogin=(userPass)=>
    ajax.post('https://reqres.in/api/login?delay=1',userPass)
    .pipe(pluck('response','token'),
    catchError(err=>of('xxx'))
    )


//configuraciones
inputEmail.type='email';
inputEmail.placeholder='Email';
inputEmail.value='eve.holt@reqres.in'

inputPass.type='password';
inputPass.placeholder='Password';
inputPass.value='cityslicka'

submitBtn.innerHTML='Ingresar';

form.append(inputEmail,inputPass,submitBtn);
document.querySelector('body').append(form);

//streams
//submit del form: extrae data, la convierte, toma valores de los input
//hace la peticion ajax, de la peticion la proceso y extraigo el token
const submitForm$=fromEvent<Event>(form,'submit')
.pipe(
    tap(ev=>ev.preventDefault()),
    map(ev=>({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    //mergeMap
    //switchMap
    exhaustMap(peticionHttpLogin)

);

submitForm$.subscribe(token=>{
    console.log(token);
})

