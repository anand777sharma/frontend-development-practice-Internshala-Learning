// function to clear the answer
function clearAnswer() {
    // clearing the answer
    document.getElementById('answer').value = '';
    // clearing the error message
    document.getElementById('error').innerText = "";
}
// function to addtwo numbers
function addtwo(a, b) {
    return a + b;
}
// function to subtract two numbers
function subtracttwo(a, b) {
    return a - b;
}
// function to multiply two numbers
function multiplytwo(a, b) {
    return a * b;
}
// function to divide two numbers
function dividetwo(a, b) {
    return a / b;
}
// function to modilus two numbers
function modulustwo(a, b) {
    return a % b;
}
// function to calculate
function calculate() {
    // changings from string to float number
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var operator = document.getElementById('operator').value;
// using operator
    switch (operator) {
        case '+':
            result = addtwo(a, b);
            break;
        case '-':
            result = subtracttwo(a, b);
            break;
        case '*':
            result = multiplytwo(a, b);
            break;
        case '/':
            result = dividetwo(a, b);
            break;
        case '%':
            result = modulustwo(a, b);
            break;
    }
// check wether the result is number or not
    if (isNaN(result)) {
        document.getElementById('error').innerText = "please check the number and hit the submit button again.";
        result = '';
    }
    // show the result
    document.getElementById('answer').value = result;
}