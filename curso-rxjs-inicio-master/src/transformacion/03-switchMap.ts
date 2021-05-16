import { fromEvent, Observable } from "rxjs";
import { debounce, debounceTime, map, mergeAll, mergeMap, pluck, switchMap } from "rxjs/operators";

import { ajax } from "rxjs/ajax";

import { GithubUser } from "../interfaces/github-user.interface";
import { GitHubUsersResp } from "../interfaces/github-users.interfaces";


//Referencias
const body=document.querySelector('body');
const textInput=document.createElement('input');
const orderList=document.createElement('ol');
body.append(textInput,orderList);

//Helpers
const mostrarUsuarios=(usuarios:GithubUser[])=>{
    console.log(usuarios);
    orderList.innerHTML='';
    for(const usuario of usuarios){
        const li=document.createElement('li');
        const img= document.createElement('img');
        img.src=usuario.avatar_url;

        const anchor=document.createElement('a');
        anchor.href=usuario.html_url;
        anchor.text='Ver pagina';
        anchor.target='_blank';

        li.append(img);
        li.append(usuario.login+' ');
        li.append(anchor);

        orderList.append(li);

    }
}

//Streams
const input$=fromEvent<KeyboardEvent>(textInput,'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent,string>('target','value'),
    mergeMap<string,Observable<GitHubUsersResp>>(texto=> ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )),
    pluck<any,GithubUser[]>('items')
);//.subscribe(mostrarUsuarios)

const url='https://httpbin.org/delay/1?arg=';

//el switchMap mantiene 1 unico observable interno activo,
//al emitir un nuevo observable en su emision el observable anterior se completa

input$.pipe(
    pluck('taget','value'),
    //cada vez que se emite un valor y se emite un nuevo observable 
    //se cancela la peticion anterior  y arroja solo final.
    switchMap(texto=>ajax.getJSON(url+texto))
).subscribe(console.log);

