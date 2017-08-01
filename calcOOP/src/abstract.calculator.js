class calculatorAbstract{
    constructor(){
        if (new.target === calculatorAbstract) {
            throw new TypeError("Cannot instantiate class directly");
        }
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
        return firstNumber / secondNumber;
    }

    calc(calcType){
        let calculation="";
        let numbers = this.number;

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

module.exports = calculatorAbstract;