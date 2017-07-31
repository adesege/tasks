const assert = require('chai').assert;
const main = require('../src/main.js');

describe('AritGeo', function(){

    it("handle Arithmetic progression", function(){
        assert.equal(main.aritGeo([11,12,13,14,15,16,17,18,19]),'Arithmetic');
    });
        
    it("handle Geometric progression", function(){
        assert.equal(main.aritGeo([10,20,40,80]),'Geometric');
    });

    it("handle neither arithmetic and geometric input", function(){
        assert.equal(main.aritGeo([3,4,6,1,5,8]),'-1');
    });

    it("handle empty input", function(){
        assert.equal(main.aritGeo([]),0);
    });

    it("check if input is an array", function(){
        assert.equal(main.aritGeo(12),'undefined');
    });

    it("check if no argument is passed", function(){
        assert.equal(main.aritGeo(),0);
    });

    it("check if array is of type integer", function(){
        assert.equal(main.aritGeo([1,4,'A',4,'7']),'-1');
    });
});