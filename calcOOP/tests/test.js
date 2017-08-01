const assert = require('chai').assert;
let {Calculator, calculatorAbstract} = require('../src/main.js');

const Calculator1= new Calculator();
Calculator1.number(10,40,30,50);

const Calculator2= new Calculator();
Calculator2.number(1,0);

const Calculator3= new Calculator();
Calculator3.number();

describe('calcOOP', function(){

    it("handle addition", function(){
        assert.equal(Calculator1.solve('add'),130);
    });
        
    it("handle subtraction", function(){
        assert.equal(Calculator1.solve('subtract'),-30);
    });

    it("handle multiplication", function(){
        assert.equal(Calculator1.solve('multiply'),400);
    });

    it("handle division", function(){
        assert.equal(Calculator1.solve('divide'),0.25);
    });

    it("handle division by zero", function(){
        assert.equal(Calculator2.solve('divide'),0);
    });

    it("handle no arguments", function(){
        assert.equal(Calculator3.solve('add'),-1);
    });

    it("handle handle instantiation", function(){
        try{
            let calculatorAbstract1=new calculatorAbstract();
        }catch(e){
            calculatorAbstract1=e.message;
        }
            assert.equal(calculatorAbstract1,'Cannot instantiate class directly');
    });

});