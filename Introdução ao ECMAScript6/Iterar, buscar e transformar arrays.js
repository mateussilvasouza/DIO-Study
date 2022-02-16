/* Metodos de Iteração de Arrays */

const arr = [1,2,3,4,5];

// //forEach irá percorrer cada elemento do array
// arr.forEach((value,index) => { //Para cada posição do array irá
//     //imprimir o index e o valor
//     console.log(`${index}: ${value}`);
// });

// //map retorna um novo array iterando cada elemento do array original
// const arr2 = arr.map(value => value * 2);
// //cada elemento do array será multiplicado e retornado em um novo array
// console.log(arr);
// console.log(arr2);

//flat retorna um novo array de forma recursiva retornando um sub array
const arr3 = [1,2,3,[4,5],[6,[7,8,[9,10]]]];
// console.log(arr3);

// const arr4 = arr3.flat(); //Retorna uma substring de profundidade 1
// console.log(arr4);

// const arr5 = arr3.flat(2); //Retorna uma substring de profundidade 2
// console.log(arr5);

//flatMap é a união do flat e do map porém com profundidade 1.
// const arr6 = arr3.flatMap(value => value*2);
// console.log(arr6);


//keys retorna um Array Iterator que contém as chaves para cada elemento do array
// const arrIterator = arr.keys();
// console.log(arrIterator);
// arrIterator.next(); //.next permite realizar a iteração das chaves ou valores.

// //values retorna um Array Iterator que contém os valores para cada elemento do array
// const arrIterator2 = arr.values();
// console.log(arrIterator2);
// arrIterator2.next();

// //entries retorna um Array Iterator com chave e valor de cada elemento do array
// const arrIterator3 = arr.entries();
// console.log(arrIterator3);
// arrIterator3.next();

/* Métodos de Busca */

//.find retorna o primeiro item que satifaz a condição
const firstGreaterThanTwo = arr.find( value => value > 2);
console.log(`\n${firstGreaterThanTwo}`);

const fruits = ['Laranja', 'Maçã', 'Abacate', 'Mangá', 'Uva'];
const apple = fruits.find( fruit => fruit == 'Maçã');
console.log(`\n${apple}`);

//.filter retorna um array com os elementos que satifazem a condição
const fruitsStartingWithM = fruits.filter(fruit => fruit.charAt(0) == 'M');
console.log(`\n${fruitsStartingWithM}`);

//.indexOf retorna o índice do primeiro elemento procurado em um array.
//.lastIndexOf retorna o índice do último elemento procurado em um array.
const abacateIndex = fruits.indexOf('Abacate');
console.log(`\n${abacateIndex}`);

const arr4 = [1,2,3,2,1,3];
const elementOne = arr4.lastIndexOf(1);
console.log(`\n${elementOne}`);

const elementTwo = arr4.lastIndexOf(2);
console.log(`\n${elementTwo}`);

//.includes retornar um booleano verificando se um elemento existe no array
const goiaba = arr3.includes('Goiaba');
console.log(goiaba);