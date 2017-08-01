class Abstract calculatorAbstract{
    constructor(mode="simple"){
        if (new.target === Abstract) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }

        if (this.method === undefined) {
            // or maybe test typeof this.method === "function"
            throw new TypeError("Must override method");
        }
    }
    add(first, second){

    }
}