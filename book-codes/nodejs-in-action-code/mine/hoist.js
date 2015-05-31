var result = add(5, 5);
console.log(result);

// function declaration is hoisted to the top of context
// function add(num1, num2) {
//     return num1 + num2;
// }


var add = function(num1, num2) {
    return num1 + num2;
}

