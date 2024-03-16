function sum(a, b) {
    return a + b;
}
function multi(a, b) {
    return a * b
}
function sub(a, b) {
    return a - b;
}
function divide(a, b) {
    var b1 = b
    if (b1 == 0) {
        return 'Error division by zero'
    }
    return a / b
}
const MathJS = {
    sum,
    sub,
    multi,
    divide
}

module.exports = MathJS;