'use strict'

function checkGeometric(inputArray){
    let result=false;
    let firstTerm = inputArray[0];
    let secondTerm = inputArray[1];
    let ratio = secondTerm / firstTerm;
    let i = 0;
    let arrayLength = inputArray.length;
    for(i=0; i < arrayLength-1; i++){
        if(!Number.isInteger(inputArray[i])){ return -1; }
        if(ratio == (inputArray[i+1]/inputArray[i])){
            result= true;
        }else{
            return false;
        }
    }
    return result;
}

function aritGeo(inputArray=false){
    /* Check if inputArray is an Arithmetric Progression or Geometric progression*/

    if(!inputArray){ return 0; }
    if(inputArray.length==0){ return 0; }
    if(!Array.isArray(inputArray)){ return 'undefined'; } // inputArray must be a typeof Array
    let arithmetic=checkArithmetic(inputArray);
    let geometric=checkGeometric(inputArray)
    if(arithmetic===true){
        return "Arithmetic";
    }else{    
        if(geometric===true){
            return "Geometric";
        }else{
            return -1;
        }
    }
}

module.exports= {
    aritGeo: aritGeo
};