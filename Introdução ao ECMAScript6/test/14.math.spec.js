// const assert = require('assert');
// const Math = require('../14. mochaMath.js');

// describe('Math class', function (){
//     it('Sum two numbers', function(){
//         const math = new Math();
//         assert.equal(math.sum(5,5),10);
//     })
// })

/**Após garantir que o teste está funcionando iremos transformar
 * a função em assincrona e verificar como seria o funcionamento do teste.
 */

 const assert = require('assert');
 const Math = require('../14. mochaMath.js');
 
 describe('Math class', function (){
    /**hooks são formas de aproveitar código evitando repetição */

    beforeEach(function(){
        value = 0; /**Antes de cada teste value voltar a ser 0 */
    });

     it('Sum two numbers', function(done){
        //O done irá garantir que o teste aguarde o callback. 
        const math = new Math();
        this.timeout(3000);

        value = 5;
        
        math.sum(5,5,(value) => {
            assert.equal(value,10);
            done();
        })
     })

     /*O mocha permite escrever testes que não existem.*/
    //  it('Multiply two numbers');
     /*Outra possívilidade é executar apenas um teste através da
     * propriedade only.
     */

    //  it.only('Multiply two numbers', function(done){
    //      const math = new Math;

    //      assert.equal(Math.multiply(5,5),25);
    //      done();
    //  });

     /**Com o uso do only veremos que apenas um teste está sendo
      * executado e falhando devido a não haver a função multiply
      * na classe Math.
      */

     /**É possível ainda pular um teste que não deva ser executado
      * através do skip.
      */

    //   it.skip('Multiply two numbers', function(done){
    //     const math = new Math;

    //     assert.equal(Math.multiply(5,5),25);
    //     done();
    // });
    /**Ao executar o código veremos que apenas o primeiro teste é executado. */
     

    it('Multiply two numbers', function(done){
        const math = new Math;

        math.multiply(0,5,(value) => {
            assert.equal(value,0);
            done();
        })
    });
 })

/* O mocha não recomenda o uso de arrowFunction devido a controle
 * de escopo.
*/
 