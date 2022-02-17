/* Criação de Arrays 
    Métodos para criação e manipulação de arrays.
*/
// const values = [1,2,3,4];
// const values2 = new Array(1,2,3,4); //Cria o array de forma semelhante ao Array.of
// const arr = Array(3);

// console.log(values);
// console.log(values2);
// console.log(arr);

// /* Array.of realiza a criação de array com base no tipo de dado*/
// const names = Array.of('Lucas', 'João', 'Thiago');
// console.log(names);

// /* Array.from cria um array de um nodeList*/
// const divs = document.querySelectorAll('div');
// const arrayDivs = Array.from(divs);

/*Manipulação de Array*/

// const frutas = ['Laranja', 'Maça'];
// console.log(frutas);

// frutas.push('Banana'); //.push realiza a inserção do elemento no final do array
// console.log(frutas);

// frutas.pop(); //.pop realiza a remoção do elemento no final do array
// console.log(frutas);

// frutas.shift(); //shift realiza a remoção do primeiro elemento do array
// console.log(frutas);

// frutas.unshift('Abacate'); //.unshift realiza a inserção do elemento no inicio do array
// console.log(frutas);

// const numbers = [1,2,3,4,5];
// const numbers2 = numbers.slice(1,2);
//.slice retorna um novo array com apenas os elementos dentro do indice de inicio e fim.

// console.log(numbers2);

const arr = [1,2,3,4,5];
arr.splice(2);
// .splice realiza a inserção ou remoção de elementos
console.log(arr);

arr.splice(1,0,10);
console.log(arr);

arr.splice(1,2,'Banana','Maça');
console.log(arr);
