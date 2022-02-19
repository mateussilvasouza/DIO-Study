/*
rest operator... funciona semelhente ao arguments, porém ao inves
  de um array objeto, ele é um array comum permitindo o uso de
  métodos de array.

Arguments é um Array Objeto que corresponde aos pametros passados
  a função. Não é possivel acessar os arguments através do uso de
  arrow functions.

*/

// function sum (...args){
//     return args.reduce((acc, value) => acc + value, 0);
// }

// console.log(sum(1,2,3,4,5));

const multiply = (...args) => args.reduce((acc,value) => acc*value, 1);

function multi(...rest){
    /* para utilizar o rest operator com o array de parametros dentro
    de uma função é originalmente era necessário usar o apply ou call
    
    O apply e o call são semelhantes, a diferença é que um aceita um array
    argumentos e outro uma lista, respectivamente.

    */
    //return multiply.apply(undefined,rest);

    /*O uso do apply e call podem tornar o código verboso, por isso
      surgiu o spreadOperator ...; o spreadOperator é semehante ao 
      rest. Porém o funcionamento é diferente, o rest transforma todos
      os parametros em um array, o spreadOperator transforma o array em
      parametros, semelhante ao apply. Funcionando em strings, arrays,
      objetos e objetos iteraveis.
    */
    return multiply(...rest);
}

console.log(multi(1,2,3,4,5,6));

const str = 'Trabalhando com rest e spread operator'

function logArgs(...args){
    console.log(args);
}

logArgs(...str); //Usando spread
logArgs(str); //usando rest

const arrTest = [1,2,3,4,5];

logArgs(...arrTest); //usando spread
logArgs(arrTest);/*usando rest o console irá imprimir [[1,2,3,4,5]]
                a existência de dois colchetes mostra que ele 
                identifica o argumento como um array e não como
                elementos individuais.*/

const arrTest2 = [...arrTest, 6,7,8];

console.log(arrTest2);

/*Destructuring Assignment (Atribuição de desestruturação)
    Formas de descontruir arrays e objetos
*/