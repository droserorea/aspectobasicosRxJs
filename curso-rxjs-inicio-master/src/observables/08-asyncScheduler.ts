import {asyncScheduler} from 'rxjs';

// setTimeout(() => { }, 3000);
// setInterval(() => { }, 3000);

const saludar=()=>console.log('Hola Mundo');
const saludar2=nombre=>console.log(`Hola Mundo ${nombre}`);


// asyncScheduler.schedule(saludar,2000);
///no es un argumento, es unicamente el estado o el state que es 1 unicamete
// asyncScheduler.schedule(saludar2,2000,'Diana');
// asyncScheduler.schedule(saludar2,2000,'Diana');


//permite crear setTimeOut y SetInterval mediante el uso de un susbscribe
const subs =asyncScheduler.schedule(function(state){
    console.log('state',state);
    this.schedule(state+1,1000);
},3000,0);


// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);


/////cancelar susbscripcion
asyncScheduler.schedule(()=>subs.unsubscribe(),6000);







