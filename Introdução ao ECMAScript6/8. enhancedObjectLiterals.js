/* Criação de Objetos Literais */

//1° maneira
let obj = {
    prop1: 'Digital Innovation One'
};

console.log(obj);

//2° maneira
let prop2 = 'Introdução ao ECMAScript'

let obj2 = {
    prop2: prop2
};

console.log(obj2);

//3° maneira
let propName = 'test';
let obj3 = {}

obj3[propName] = 'prop value';
console.log(obj3);

//funciona também com o uso de funções
//Shorthand
function method1(){
    console.log('method called');
}

let obj4 = {
    method1,
    sum(a,b) {return a+b;},
    multiply: function multiply(a,b){return a*b;}
};

console.log(obj4);
obj4.method1();
console.log(obj4.sum(2,3));
console.log(obj4.multiply(2,3));