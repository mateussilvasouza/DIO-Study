/**Verificar as classes de teste na pasta 'test' para compreender. */

// class Math{
//     sum(a,b){
//         return a+b;
//     }
//     multiply(a,b){
//        return (a * b);
//     }
// }

// module.exports = Math;

/**Após garantir que a função e o teste está funcionando iremos transformar
 * a função em assincrona e verificar como seria o funcionamento do teste.
 */

// class Math{
//     sum(a,b,callback){
//         setTimeout(()=> {
//             callback(a + b);
//         },0)
//     }

//     multiply(a,b,callback){
//         setTimeout(()=>{
//             callback(a * b);
//         },0)
//     }
// }

// module.exports = Math;

/**Agora vamos verificar o desenvolvimento de código com Sinon */

class Math{
    sum(a,b,callback){
        setTimeout(()=> {
            callback(a + b);
        },0)
    }

    multiply(a,b,callback){
        setTimeout(()=>{
            callback(a * b);
        },0)
    }

    printSum(req, res, a, b){
        res.load('index', a + b);
    }
    /**Embora seja possível usar o mocha ou o chai para garantir
     * que o método foi chamado, usaremos o Sinon para entender o
     * comportamento.
     */
}

module.exports = Math;