'use strict'

function aritGeo(inputArray=false){
    /* Check if inputArray is an Arithmetric Progression or Geometric progression*/

    if(!inputArray){ return 0; } //Argument must be passed
    if(inputArray.length==0){ return 0; } //inputArray must not be empty
    if(!Array.isArray(inputArray)){ return 'undefined'; } // inputArray must be a typeof Array

    let result=false;
    let firstTerm = inputArray[0];
    let secondTerm = inputArray[1];
    let ratio = secondTerm / firstTerm;
    let difference = secondTerm - firstTerm;
    let arrayLength = inputArray.length;

    for(let i=0; i < arrayLength-1; i++){

        if(!Number.isInteger(inputArray[i])){ return -1; }

        if(ratio == (inputArray[i+1]/inputArray[i])){
            result= "Geometric";
        }else{
            if(difference == (inputArray[i+1]-inputArray[i])){
                result= "Arithmetic";
            }else{
                return -1;
            }
        }
    }
    return result;
}

module.exports= {
    aritGeo: aritGeo
};