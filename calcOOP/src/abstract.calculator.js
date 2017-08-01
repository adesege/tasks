class calculatorAbstract{
    constructor(){
        if (new.target === calculatorAbstract) {
            throw new TypeError("Cannot instantiate class directly");
        }
    }

    number(...number){ }

    sliceNumber(limit=2){ }

    add(){ }

    multiply(){ }

    subtract(){ }

    divide(){ }

    solve(calcType){  }

}

module.exports = calculatorAbstract;