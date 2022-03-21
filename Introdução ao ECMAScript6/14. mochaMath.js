// class Math{
//     sum(a,b){
//         return a+b;
//     }
// }

// module.exports = Math;

/**Após garantir que a função e o teste está funcionando iremos transformar
 * a função em assincrona e verificar como seria o funcionamento do teste.
 */

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
}

module.exports = Math;