const Calculator = require('./class.js')

let calculate = new Calculator;

console.log(calculate.ratio(30, 40, 60))
console.log(calculate.percentage(20, 40));
console.log(calculate.add(50, 80));
console.log(calculate.subtract(20, 30));
console.log(calculate.multiply(55, 70))
console.log(calculate.divide(44, 20));
console.log(calculate.modulation(10, 2));
console.log(calculate.elevate(4, 5));
console.log(calculate.sqrt(4));
console.log(calculate.pi)
console.log(calculate.e)