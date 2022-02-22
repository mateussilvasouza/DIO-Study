/* Symbols
    Um symbol é um identificador único. Podemos passar um valor ao
symbol, esse valor é um identificador para fim de debug.

*/

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');
console.log(uniqueId === uniqueId2); /* Ao executarmos esse 
código vemos que irá retornar false, isso se dá pelo fato de cada
symbol ser único, independente o valor passado para ele. */

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);

Object.keys(obj); /* Ao executar no console do navegador vemos que 
não retorna o symbol */
Object.getOwnPropertySymbols(obj);/*Assim conseguimos verificar o symbol */