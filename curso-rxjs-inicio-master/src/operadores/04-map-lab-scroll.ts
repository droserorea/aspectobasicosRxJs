import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto=document.createElement('div');
texto.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum consequat ex sed ullamcorper. Quisque quis odio vel enim volutpat euismod. Nunc et tortor mauris. Donec in leo neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo arcu eu eros volutpat tempor. Phasellus posuere, neque vel cursus hendrerit, ipsum sem rutrum risus, vitae placerat mi enim a est. Phasellus eu suscipit lorem. Sed et viverra arcu, in semper mauris.
<br/><br/>
Suspendisse auctor porttitor nisi quis sollicitudin. Donec congue felis nibh, et euismod sem malesuada et. Suspendisse erat dui, gravida ac ultricies ut, pretium sit amet arcu. Proin posuere magna quis sem suscipit consectetur. Pellentesque accumsan convallis ornare. Etiam mattis gravida nisl, eget ullamcorper nisi laoreet sed. Pellentesque commodo urna ac molestie pellentesque. Ut at cursus tellus.
<br/><br/>
Nam nec erat suscipit, ornare risus eu, consequat neque. Pellentesque placerat elit et massa porttitor, quis dapibus nisi pharetra. Ut euismod tempor tortor ac lacinia. Quisque nec urna iaculis nulla tempus laoreet. Vivamus sit amet eros nec purus volutpat consectetur. Sed a dolor nec mauris commodo laoreet a id purus. Sed id velit non mi vulputate congue non in tortor.
<br/><br/>
Nullam rutrum laoreet lorem, vitae venenatis turpis luctus at. Quisque dapibus lobortis mi, sed rhoncus libero dignissim ac. Nulla convallis faucibus purus, at aliquet nibh porttitor eu. Maecenas fringilla leo ac vehicula ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Maecenas eget pretium nibh. Quisque lacus libero, interdum hendrerit commodo dignissim, laoreet vitae augue. In vel lectus eleifend, ultrices quam eu, blandit ligula. Nulla ac mauris ligula. Mauris eget sagittis tellus. Duis eu leo ut nibh vestibulum egestas eget nec eros. Quisque ornare nec diam nec finibus.
<br/><br/>
Ut lacinia rhoncus metus, sed facilisis quam egestas eu. Fusce pharetra risus enim, vitae porttitor augue rhoncus sed. Nunc velit ipsum, tempus ac vulputate id, suscipit ut orci. In bibendum purus nec sapien imperdiet, in elementum risus ullamcorper. Nam dui augue, semper sit amet nunc non, fringilla finibus tellus. Integer non scelerisque risus, pulvinar fermentum quam. Vivamus congue venenatis metus sed laoreet.
<br/><br/>
Suspendisse auctor porttitor nisi quis sollicitudin. Donec congue felis nibh, et euismod sem malesuada et. Suspendisse erat dui, gravida ac ultricies ut, pretium sit amet arcu. Proin posuere magna quis sem suscipit consectetur. Pellentesque accumsan convallis ornare. Etiam mattis gravida nisl, eget ullamcorper nisi laoreet sed. Pellentesque commodo urna ac molestie pellentesque. Ut at cursus tellus.
<br/><br/>
Nam nec erat suscipit, ornare risus eu, consequat neque. Pellentesque placerat elit et massa porttitor, quis dapibus nisi pharetra. Ut euismod tempor tortor ac lacinia. Quisque nec urna iaculis nulla tempus laoreet. Vivamus sit amet eros nec purus volutpat consectetur. Sed a dolor nec mauris commodo laoreet a id purus. Sed id velit non mi vulputate congue non in tortor.
<br/><br/>
Nullam rutrum laoreet lorem, vitae venenatis turpis luctus at. Quisque dapibus lobortis mi, sed rhoncus libero dignissim ac. Nulla convallis faucibus purus, at aliquet nibh porttitor eu. Maecenas fringilla leo ac vehicula ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Maecenas eget pretium nibh. Quisque lacus libero, interdum hendrerit commodo dignissim, laoreet vitae augue. In vel lectus eleifend, ultrices quam eu, blandit ligula. Nulla ac mauris ligula. Mauris eget sagittis tellus. Duis eu leo ut nibh vestibulum egestas eget nec eros. Quisque ornare nec diam nec finibus.
<br/><br/>
Ut lacinia rhoncus metus, sed facilisis quam egestas eu. Fusce pharetra risus enim, vitae porttitor augue rhoncus sed. Nunc velit ipsum, tempus ac vulputate id, suscipit ut orci. In bibendum purus nec sapien imperdiet, in elementum risus ullamcorper. Nam dui augue, semper sit amet nunc non, fringilla finibus tellus. Integer non scelerisque risus, pulvinar fermentum quam. Vivamus congue venenatis metus sed laoreet.`
;

const body=document.querySelector('body');
body.append(texto);

const progressBar=document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);
//funcion que realice calculo
//calculo de porcentaje scroll
const calPorcentajeScroll=(event)=>{
    //se extrae la propiedades del Scroll
    //no esta definido un scrollEvent por eso se accede por una constante
    const{
        scrollTop,
        scrollHeight,
        clientHeight
    }=event.target.documentElement;
    // console.log({scrollTop,scrollHeight,clientHeight});
    return (scrollTop/(scrollHeight-clientHeight))*100;
}

//-susbscribir al scroll de html
//Streams
const scroll$=fromEvent(document,'scroll');
//emite toda la informacion del scroll
//scroll$.subscribe(console.log);
const progress$=scroll$.pipe(
    // map(event=>calPorcentajeScroll(event))
    map(calPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje=>{
    progressBar.style.width=`${porcentaje}%`
});
