
function checkExpression() {
    var expression = document.getElementById("num").value;
    var result = document.getElementById("result");

    try {
        var output = eval(expression);
        result.innerText = output;
    } catch (error) {
        result.innerText = "";
    }
}

function appendToExpression(value) {
    var numField = document.getElementById("num");
    var currentValue = numField.value;

    if (currentValue === "0") {
        numField.value = value;
    } else {
        numField.value += value;
    }
}

function calculateResult() {
    checkExpression();
}

function clearCalculator() {
    document.getElementById("num").value = "";
    document.getElementById("result").innerText = "";
}
