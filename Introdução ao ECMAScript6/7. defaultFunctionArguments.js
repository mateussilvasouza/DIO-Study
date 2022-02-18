//----------------------------------------------------------------------------------//

/* Default Function Arguments
    Ao se desenvolver funções que necessitam de argumentos,
      alguns problemas podem ocorrer como a ausência de alguns.
    Para solucionar esse problema existem algumas práticas, antigas
      e novas.
*/


// function soma (a, b){
//     return a + b;
// }

// console.log(soma(10));

/*O console.log irá imprimir NaN (not a number), isso ocorre
devido a ausencia de um parametro, isso é b não é um número.
  Algumas práticas podem ser adotadas.
*/

// function soma (a, b){
//     b = b || 0;
//     //nesse caso, caso b não seja passado no parametro função irá assumir que seu valor é 0.
//     return a + b;
// }

// console.log(soma(10));

// function soma2(a, b = a){
//     //essa aplicação funciona da mesma forma que a anterior.
//     //caso o parametro b não seja passado b irá receber o valor de a.
//     return a + b;
// }

// console.log(soma2(3));

/* outra pratica é o lazy evaluation, quando uma função auxiliar 
fica responsável por gerar um número para resolver a falta de parametro.
*/

function randomNumber(){
    console.log('Generating a random number...');
   
    return Math.random()*10;
}

const soma3 = (a = randomNumber(), b = randomNumber()) => a + b;

console.log(soma3());
//A função randomNumber() será invocada duas vezes antes de executar a soma

console.log(soma3(5));
//A função será invocada uma vez.

console.log(soma3(3,2));
//A função não será invocada.

