/*Currying




*/

//Sem Currying
function soma(a, b){
    return a + b;
}

console.log(soma(2,2));
console.log(soma(2,3));
console.log(soma(2,4));
console.log(soma(2,5));

//Com uso do Currying
function soma(a){
    return function(b){
        return a + b;
    }
}

const soma = soma(2);

console.log(soma(2));
console.log(soma(3));
console.log(soma(4));
console.log(soma(5));