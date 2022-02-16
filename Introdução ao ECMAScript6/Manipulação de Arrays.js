/* Criação de Arrays */
const values = [1,2,3,4];
const values2 = new Array(1,2,3,4); //Cria o array de forma semelhante ao Array.of
const arr = Array(3);

console.log(values);
console.log(values2);
console.log(arr);

/* Array.of realiza a criação de array com base no tipo de dado*/
const names = Array.of('Lucas', 'João', 'Thiago');
console.log(names);

/* Array.from cria um array de um nodeList*/
const divs = document.querySelectorAll('div');
const arrayDivs = Array.from(divs);