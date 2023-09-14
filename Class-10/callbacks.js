// function func1(a, b, cb1, cb2) {
//     cb1(cb2)
//     return a+b;
// }

// function func2(cb3) {
//     console.log("func2")
//     cb3()
// }

// function func3() {
//     console.log("func3")
// }

// let num1 = 1
// let num2 = 2
// let sum = func1(num1, num2, func2, func3)
// console.log(sum)
// func2()

function square(a) {
    return a*a;
}

function sum(a, b) {
    return a+b;
}

function sumOfSquares(a, b, square, sum) {
    let a2 = square(a);
    let b2 = square(b);
    let sumOfSq = sum(a2, b2);
    return sumOfSq
}

let a = 1;
let b = 2;
console.log(sumOfSquares(a, b, square, sum))