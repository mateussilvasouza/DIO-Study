const assert = require('assert');
const Math = require('../14. mochaMath.js');
const expect = require('chai').expect;

/**Agora com o uso do Sinon veremos como mockar um método.
*/

const sinon = require('sinon');
 
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

    it.only('Calls req with sum and index values', function(){
        const req = {};
        const res = {
            load: sinon.spy()
            //Cria uma função espiã para verificar a chamada do método
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.args[0][0]).to.be.equal('index');
            //verifica se o primeiro argumento passado é igual a index
        expect(res.load.args[0][1]).to.equal(10);
            //verifica se a soma do segundo argumento é igual a 10;
    })
    
 })
