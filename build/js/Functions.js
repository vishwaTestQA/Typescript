"use strict";
function logMsg(num) {
    console.log(num);
}
let addFunction = (a, b) => {
    return a + b;
};
let res = addFunction(1, 2);
logMsg(res);
let subtract = function sub(a, b) {
    return a - b;
};
logMsg(subtract(5, 2));
let multiply = (a, b) => a * b;
let divide = (a, b) => {
    return a / b;
};
logMsg(multiply(2, 4));
logMsg(divide(5, 2));
