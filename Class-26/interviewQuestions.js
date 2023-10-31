// Truthy and Falsy

// Falsy: false, undefined, null, '', NaN, 0, document.all()

let a = []

// if (a) {
//     console.log("Truthy")
// } else {
//     console.log("Falsy")
// }

// == and  ===
let b = 2
let c = '2'

// console.log(b == c) // loosely type checking
// console.log(b === c) // strict type checking

// console.log(1 + "2")

// typeOf operator
let d = [1,2,3,4]
let e = {}

// console.log(typeof d)
// console.log(typeof e)


// Array.isArray() method
// console.log(Array.isArray(d))
// console.log(Array.isArray(e))


let f = 1/0

// console.log(f)


// console.log(2 + '')


// NaN - Not a number

let g = 4/''
let h = 3 * "string"
let i = Math.sqrt(-10)

// isNaN() method
// console.log(typeof f)
console.log(isNaN(undefined))


