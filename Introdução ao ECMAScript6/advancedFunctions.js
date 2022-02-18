/* Arrow Functions */

//declaração tradicional

// var sum = function(a,b){
//     return a + b;
// }
// //Ambas as declarações tradicionais possuem a mesma sintaxe.
// function soma (a,b){
//     return a + b;
// }
// let result = soma(10,20);

// //Arrow functions
// const soma2 = (a,b) => a + b;

// console.log(result);
// console.log(soma2(5,5));

/* Principais Diferenças

    -Arrow functions são anonimas, só é possível usá-las atribuindo
      a uma variável ou passando por parametro.

    -Arrow functions por padrão retornam algo, logo não é necessário
      escrever o return como na forma de declaração original.

    -Arrow functions não necessitam escrever a palavra function.
    -Arrow function não permite a criação de objetos.
    -Arrow function não permite o uso do hoisting.
    -Arrow function envolve o contexto da função evitando a necessidade
      de utilizar métodos para que o contexto se fixe.

*/

// var obj = function() {
//     showContent: function showContent(){
//         this.log('teste');
//         setTimeout(function(){
//             console.log(this);
//         }.bind(this),1000);
//     }
//     log: function log(value){
//         console.log(value);
//     }
// }

/* Funções em js possuem contexto de invocação,
alguns métodos expecíficos possuem contexto global como por exemplo
o setTime */

/* O código abaixo apresentará um erro this.log is not a function
já que o setTimeout irá buscar a função log no contexto global e
não no bloco do objeto.*/
// var obj = {
//     showContext: function showContext(){
//         this.log('teste');
//         setTimeout(function(){
//             this.log('after 1000ms');
//         },1000);
//     }
//     ,
//     log: function log(value){
//         console.log(value);
//     }
// };

/* Para resolver esse erro existem alguns métodos para fixar o contexto
do setTimeout. O problema é que se torna muito verboso.*/
// var obj = {
//     showContext: function showContext(){
//         this.log('teste');
//         setTimeout(function(){
//             this.log('after 1000ms');
//         }.bind(this),1000);
//     }
//     ,
//     log: function log(value){
//         console.log(value);
//     }
// };

// console.log(obj.showContext());

//setTimeout com o uso de arrow function
// var obj = {
//     showContext: function showContext(){
//         this.log('teste');
//         setTimeout(() => {
//             this.log('after 1000ms');
//         },1000);
//     }
//     ,
//     log: function log(value){
//         console.log(value);
//     }
// };

// console.log(obj.showContext());

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

function soma (a, b){
    b = b || 0;
    //nesse caso, caso b não seja passado no parametro função irá assumir que seu valor é 0.
    return a + b;
}

console.log(soma(10));

function soma2(a, b = a){
    //essa aplicação funciona da mesma forma que a anterior.
    //caso o parametro b não seja passado b irá receber o valor de a.
    return a + b;
}

console.log(soma2(3));