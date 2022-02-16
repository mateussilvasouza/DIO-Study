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
const arr6 = arr3.flatMap(value => value*2);
console.log(arr6);
