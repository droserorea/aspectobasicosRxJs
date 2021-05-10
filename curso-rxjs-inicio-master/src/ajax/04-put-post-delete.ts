import { ajax } from "rxjs/ajax";

//Metodos, PUT, POST , DELETE
const url='https://httpbin.org/delay/1';

// ajax.post(url,{
//      id:1,
//      nombre:'Diani'
// },{
//     'mi-token':'ABC123'
// }).subscribe(console.log);

//determinar si es post o put lo que se quiere realizar
ajax({
    url:url,
    method:'PUT',
    headers:{
        'mi-token':'abd123'
    },
    body:{
        id:1,
        nombre:'Diani'
    }
}).subscribe(console.log);