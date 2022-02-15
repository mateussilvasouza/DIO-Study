/*Currying
    Currying é uma forma de passar parametros para uma função de forma parcial.
    Dessa forma ao invés de informar os parametros de uma só vez, 
eles serão passados a medida que os parametros estiverem disponíveis.
    Dessa forma apenas o primeiro parametro é informado e os demais
ao longo da execução do código.
*/

//Sem Currying
/*
function soma(a, b){
    return a + b;
}

console.log(soma(2,2));
console.log(soma(2,3));
console.log(soma(2,4));
console.log(soma(2,5));
*/


//Com uso do Currying
function soma(a){
    return function(b){
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));