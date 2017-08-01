let calculatorAbstract= require("./abstract.calculator")

class Calculator extends calculatorAbstract{
    constructor(calcType){
        super();
        this.calcType=calcType;
    }

    calc(calcType){
        let result = super.calc(calcType);
        return result;
    }
}

let calc= new Calculator();
calc.number(1,2,3,4,5);

console.log(calc.calc('add'))