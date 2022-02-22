/* Symbols
    Um symbol é um identificador único. Podemos passar um valor ao
symbol, esse valor é um identificador para fim de debug.

*/

const uniqueId = Symbol('Hello');
// const uniqueId2 = Symbol('Hello');
// console.log(uniqueId === uniqueId2); /* Ao executarmos esse 
// código vemos que irá retornar false, isso se dá pelo fato de cada
// symbol ser único, independente o valor passado para ele. */

const obj = {
    [uniqueId]: 'Hello'
};

// console.log(obj);

// Object.keys(obj); /* Ao executar no console do navegador vemos que 
// não retorna o symbol */
// Object.getOwnPropertySymbols(obj);/*Assim conseguimos verificar o symbol */

//Well known symbols
Symbol.iterator//pode ser usado para alterar propriedades em objetos
Symbol.split//pode ser usado para alterar propriedades em objetos
Symbol.toStringTag //pode ser usado para alterar propriedades em objetos

const obj2 = {
    [Symbol.iterator](){
        //Torna o objeto iterável
    }
}

const arr = [1,2,3,4,5];

const it = arr[Symbol.iterator](); /* Criamos um iterador para o array, 
                isso nos permite criar estruturas de dados.*/
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

while(true){
    let {value, done} = it.next();
    console.log(value);

    if(done){
        break;
    }
}