/* Symbols
    Um symbol é um identificador único. Podemos passar um valor ao
symbol, esse valor é um identificador para fim de debug.
*/

// const uniqueId = Symbol('Hello');
// const uniqueId2 = Symbol('Hello');
// console.log(uniqueId === uniqueId2); /* Ao executarmos esse 
// código vemos que irá retornar false, isso se dá pelo fato de cada
// symbol ser único, independente o valor passado para ele. */

// const obj = {
//     [uniqueId]: 'Hello'
// };

// console.log(obj);

// Object.keys(obj); /* Ao executar no console do navegador vemos que 
// não retorna o symbol */
// Object.getOwnPropertySymbols(obj);/*Assim conseguimos verificar o symbol */

//Well known symbols
// Symbol.iterator//pode ser usado para alterar propriedades em objetos
// Symbol.split//pode ser usado para alterar propriedades em objetos
// Symbol.toStringTag //pode ser usado para alterar propriedades em objetos

// const obj2 = {
//     [Symbol.iterator](){
//         //Torna o objeto iterável
//     }
// }

// const arr = [1,2,3,4,5];

// const it = arr[Symbol.iterator](); /* Criamos um iterador para o array, 
                // isso nos permite criar estruturas de dados.*/
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// while(true){
//     let {value, done} = it.next();
//     console.log(value);

//     if(done){
//         break;
//     }
// }
// const str = 'Digital Innovation One';

// for(let value of str){
//     console.log(value);
// }

const obj3 = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        /* Através do symbol tornaremos o objeto iterável */
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i-1],
                    done: i > this.values.length
                 };
            }
        };
    }
};

// const it = obj3[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


/*O uso do Symbol.iterator no objeto permitiu o uso do for of para iteração*/
for(let value of obj3){
    console.log(value);
}