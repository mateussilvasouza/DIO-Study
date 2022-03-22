const assert = require('assert');
const Math = require('../14. mochaMath.js');

/**Agora com o uso do chai conseguimos tornar o código mais legível
 * seguindo os conceitos do BDD de documentar melhor os comportamentos.
*/
const expect = require('chai').expect;
 
 describe('Math class2', function (){
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
            expect(value).to.equal(10);
            done();
        })
     })

    it('Multiply two numbers', function(done){
        const math = new Math;
        
        math.multiply(0,5,(value) => {
            expect(value).to.equal(0);
            done();
        })
    });

    it('Property Name', function(done){
        const obj = {
            name: 'Mateus'
        };
        
        expect(obj).to.have.property('name');
        done();
    });
 })
