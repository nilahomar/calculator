class Calculator {
    constructor() {
        this.invalidNumbers = new Error("You need to provide two valid numbers to operate!");
        this.notANumber = new Error("Numbers given aren't numbers.");
        this.pi = Math.PI;
        this.e = Math.E;
    }

    ratio(x, y, width) {
        if (!x || !y || !width) {
            throw this.invalidNumbers;
        } else if (isNaN(x) || isNaN(y) || isNaN(width)) {
            throw this.notANumber
        } else {
            let ratio = Math.abs(y) / Math.abs(x);
            return ratio * width;
        }
    }

    percentage(x, y) {
        if (!x || !y) {
            throw this.invalidNumbers;
        } else if (isNaN(x) || isNaN(y)) {
            throw this.notANumber
        } else {
            return (x / 100) * y;
        }
    }

    add(x, y) {
        if (!x || !y) {
            throw this.invalidNumbers;
        } else if (isNaN(x) || isNaN(y)) {
            throw this.notANumber
        } else {
            return x + y;
        }
    }

    subtract(x, y) {
        if (!x || !y) {
            throw this.invalidNumbers;
        } else if (isNaN(x) || isNaN(y)) {
            throw this.notANumber
        } else {
            return x - y;
        }
    }

    multiply(x, y) {
        if (!x || !y) {
            throw this.invalidNumbers;
        } else if (isNaN(x) || isNaN(y)) {
            throw this.notANumber
        } else {
            return x * y;
        }
    }

    divide(x, y) {
        if (!x || !y) {
            throw this.invalidNumbers;
        } else if (isNaN(x) || isNaN(y)) {
            throw this.notANumber
        } else if (y === 0) {
            throw new Error("Divisor must be a value greater than zero!")
        } else {
            return x / y;
        }
    }

    modulation(x, y) {
        if (!x || !y) {
            throw this.invalidNumbers;
        } else if (isNaN(x) || isNaN(y)) {
            throw this.notANumber
        } else if (y === 0) {
            throw new Error("Divisor must be a value greater than zero!")
        } else {
            return x % y;
        }
    }

    elevate(x, y) {
        if (!x || !y) {
            throw this.invalidNumbers;
        } else if (isNaN(x) || isNaN(y)) {
            throw this.notANumber
        } else {
            return x ** y;
        }
    }

    sqrt(x) {
        if (!x) {
            throw this.invalidNumbers;
        } else if (isNaN(x)) {
            throw this.notANumber
        } else {
            return Math.sqrt(x)
        }
    }
}

module.exports = Calculator;