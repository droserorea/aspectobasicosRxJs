import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounce, debounceTime, map, mergeAll, pluck } from "rxjs/operators";
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


// input$.pipe(
//     debounceTime(500),
//     map(event=>{
//         const texto=event.target['value'];
//         return ajax.getJSON(
//             `https://api.github.com/search/users?q=${texto}`
//         )
//     })

// ).subscribe(resp=>{
//     resp.subscribe(console.log)
// });


/***-----***/
//mergeAll trabjar con observables que retornan observables

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent,string>('target','value'),
    map<string,Observable<GitHubUsersResp>>(texto=> ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )),
    mergeAll<GitHubUsersResp>(),
    pluck<any,GithubUser[]>('items')
).subscribe(mostrarUsuarios)

// (users=>{
//     console.log(users[0].score);
//});

//

