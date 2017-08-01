class calculatorAbstract{
    constructor(){
        if (new.target === calculatorAbstract) {
            throw new TypeError("Cannot instantiate class directly");
        }
    }

    number(...number){ }

    add(){
        return this.number.reduce((a, b) => Math.abs(a) + Math.abs(b));
    }

    add(){
        return this.number.reduce((a, b) => Math.abs(a) + Math.abs(b));
    }


    number(...number){
        this.number=number;
        return this;
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
            default:
                calculation = this.add();
                break;
        }
        return calculation;
    }

}

module.exports = calculatorAbstract;