function sum(a, b) {
    return a+b
}

// console.log(sum(2,3))

function sum(a) {
    return function(b) {
        console.log(a+b)
    }
    // function _sum(b) {
    //     console.log(a+b)
    // }
    // return _sum
}

// let sumFunc = sum(2)
// console.log(sumFunc)
// sumFunc(3)

// sum(2)(3)


// Q-1 Function to multiply 2 numbers using currying
function multiply(a){
    return function(b){
        console.log(a*b)
    }
}
// multiply(2)(3)

// Q-2 Function which will take an operation and 2 operands and return the output
// function calculate(operation) {
//     // some logic on argument
//     return function(operand1) {
//         return function(operand2) {
//             if (operation === 'sum') {
//                 return operand1 + operand2
//             } else if (operation === 'subtract') {
//                 return operand1 - operand2
//             } else if (operation === 'multiply') {
//                 return operand1 * operand2
//             } else if (operation === 'divide') {
//                 return operand1 / operand2
//             } else {
//                 return 'Invalid Operation'
//             }
//         }
//     }
// }
// console.log(calculate('sum')(2)(3))
// console.log(calculate('subtract')(2)(3))
// console.log(calculate('multiply')(2)(3))
// console.log(calculate('divide')(2)(3))

// Q-4 Function which will take variable number of arguments and return the sum of it
function sum (a) {
    return function (b) {
        if (b) {
            return sum(a+b)
        }
        return a
    }
}

// console.log(sum(1)(2)(3)(4)())
// console.log(sum(1)(2)())
// console.log(sum(1)(2)(3)(4)(5)(6)())



function calculate(operation) {
    return function(operand1, operand2) {
        if (operation === 'sum') {
            return operand1 + operand2
        } else if (operation === 'subtract') {
            return operand1 - operand2
        } else if (operation === 'multiply') {
            return operand1 * operand2
        } else if (operation === 'divide') {
            return operand1 / operand2
        } else {
            return 'Invalid Operation'
        }
    }
}

console.log(calculate('sum')(2, 3))
console.log(calculate('subtract')(2, 3))
console.log(calculate('multiply')(2, 3))
console.log(calculate('divide')(2, 3))




