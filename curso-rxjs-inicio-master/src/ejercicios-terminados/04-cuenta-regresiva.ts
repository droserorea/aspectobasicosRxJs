import { interval, range } from 'rxjs';
import { map, sampleTime, take, tap } from 'rxjs/operators';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

    const inicio = 7;
    const countdown$ = interval(700).pipe(
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva

        tap(x=>(console.log('valor',x))),
        tap(x=>(console.log('valor',inicio))),
        //a mi numero de inicio disminuyo el numero de i, que es lo que emite mi interval
        map(i=>inicio-i),
        take(8),
       

    );
    

    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================


})();

		