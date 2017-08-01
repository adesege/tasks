let calculatorAbstract= require("./abstract.calculator");

class calculatorBase extends calculatorAbstract{
    constructor(){
        super();
    }

    number(...number){
        this.number=number;
        return this;
    }

    sliceNumber(limit=2){
        return this.number.slice(0,limit);
    }

    add(){
        return this.number.reduce((a, b) => Math.abs(a) + Math.abs(b));
    }

    multiply(){
        let [firstNumber, secondNumber]=this.sliceNumber();
        return firstNumber * secondNumber;
    }

    subtract(){
        let [firstNumber, secondNumber]=this.sliceNumber();
        return firstNumber - secondNumber;
    }

    divide(){
        let [firstNumber, secondNumber]=this.sliceNumber();
        if(secondNumber==0){ return 0; }
        return firstNumber / secondNumber;
    }

    solve(calcType){
        let calculation="";
        let numbers = this.number;

        if(!Array.isArray(numbers)){ return -1; }
        if(numbers.length<1){ return -1; }

        switch (calcType) {
            case 'add':
                calculation = this.add();
                break;
            case 'multiply':
                calculation = this.multiply();
                break;
            case 'divide':
                calculation = this.divide();
                break;
            case 'subtract':
                calculation = this.subtract();
                break;
            default:
                calculation = this.add();
                break;
        }
        return calculation;
    }

}

module.exports = calculatorBase;