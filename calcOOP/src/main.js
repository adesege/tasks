let Calculator= require("./class.calculator.js");

let calc= new Calculator();
calc.number(1,2,3,4,5);

console.log(calc.calc('divide'));

console.log(calc.calc('add'));

console.log(calc.calc('multiply'));

console.log(calc.calc('subtract'));