/*Currying
    Currying é uma forma de passar parametros para uma função de forma parcial.
    Dessa forma ao invés de informar os parametros de uma só vez, 
eles serão passados a medida que os parametros estiverem disponíveis.
    Dessa forma apenas o primeiro parametro é informado e os demais
ao longo da execução do código.
*/

// //Sem Currying
// function soma(a, b){
//     return a + b;
// }

// console.log(soma(2,2));
// console.log(soma(2,3));
// console.log(soma(2,4));
// console.log(soma(2,5));

// //Com uso do Currying
// function soma(a){
//     return function(b){
//         return a + b;
//     }
// }

// const soma2 = soma(2);

// console.log(soma2(2));
// console.log(soma2(3));
// console.log(soma2(4));
// console.log(soma2(5));

//----Hoisting----//
/* Hoisting 
    Permite o uso de variáveis e funções antes que sejam declaradas,
sendo elevadas dentro do escopo.
    Tipos: Variaveis ou funções



*/

//Hoisting de Variável
// function fn(){
//     console.log(text);

//     var text = "Exemplo";

//     console.log(text);
// }
//Ao chamar a função o primeiro console gera um undefined, uma vez
//a variável existe mas não foi declarada, o segundo console
//imprime a variável declarada.

//fn();

//Hoisting de função
// function fn(){
//     log('Hoisting de função');

//     function log(value){
//         console.log(value);
//     }
// }

//Ao chamar a função fn, a função log será executada antes de
// ser declarada.

// fn();

//------Imutabilidade------//
/* Imutabilidade
    As variáveis e objetos nunca irão se alterados, caso sejam
necessárias alterações uma nova variável ou objeto será criado
com as alterações necessárias.
*/

//Objeto User
// const user = {
//     name: "Guilherme",
//     lastName: "Cabrini da Silva"
// };

///Função que retorna o nome completo do user
// function getUserWithFullName(user){
//     return{
//         ...user,
//         fullName:`${user.name} ${user.lastName}`
//     }
// }

//Ao inves alterar o objeto user adicionando a propriedade fullName
// criamos um novo objeto com as propriedades do user e a nova propriedade fullName

// const UserWithFullName = getUserWithFullName(user);

// console.log(user);
// console.log("--------");
// console.log(UserWithFullName);

const students = [
    {
        name: 'Grace',
        grade:7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 8
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);