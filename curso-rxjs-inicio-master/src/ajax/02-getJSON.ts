import{ajax}from 'rxjs/ajax';
const url='https://httpbin.org/delay/1';
// const url='https://api.github.com/users?per_page=5';

//se puede ver la data que se envia con la POST,PUT,DELETE
//juntos con sus headers
//enviar nueva informacion a los headers
const obs$=ajax.getJSON(url,{
    'Content-Type':'application/json',
    'mi-token':'ABC123'
});
obs$.subscribe(data=>console.log('data',data))