class Calculator {

    
    constructor() {

        this.display = document.getElementById("display");
        this.firstNumber = "";
        this.operator = "";
        this.secondNumber = "";

    }

    delete() {

        this.display.value = this.display.value.slice(0, -1);

        if (this.display.value === "") {
            this.display.value = "0";
        }
    }

    numberClick(number) {

        if (this.display.value === "0") {
            this.display.value = number;
        }

        else {
            this.display.value += number;
        }
    }

    addDot() {
        document.getElementById("display").value += ".";
    }

    chooseOperator(selectedOperator) {

        this.firstNumber = this.display.value;
        this.operator = selectedOperator;
        this.display.value = "0";

    }

    clearDisplay() {

        this.display.value = "0";
        this.firstNumber = "";
        this.operator = "";
        this.secondNumber = "";

    }


    calculate() {

        this.secondNumber = this.display.value;

        let first = Number(this.firstNumber);
        let second = Number(this.secondNumber);

        let result;


        if (this.operator === "+") {

            result = first + second;
        }

        else if (this.operator === "-") {

            result = first - second;
        }

        else if (this.operator === "*") {

            result = first * second;
        }

        else if (this.operator === "%") {

            result = first % second;
        }


        this.display.value = result;
    }
}

const calculator  = new Calculator();