let arr = [1,2,3,4,5,6]

Array.prototype.sort = function() {
    console.log("Sanchit is my master")
}

console.log(arr)
// console.log(arr.sort())

// Polyfill for map() method
function square(a) {
    return a*a
}

Array.prototype.myMap = function(cb) {
    let newArr = []
    for(var i = 0; i < this.length; i++) {
        newArr.push(cb(this[i]))
    }
    return newArr
}

let ans = arr.myMap(square)
// console.log(ans)
// console.log(arr)

// Polyfill for filter method
function isEven(a) {
    return a%2 == 0
}

// let ans2 = arr.filter(isEven)
// console.log(ans2)
// console.log(arr)

Array.prototype.myFilter = function(cb) {
    let newArr = []
    for(var i = 0; i < this.length; i++) {
        if(cb(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr
}

let ans2 = arr.myFilter(isEven)
console.log(ans2)
console.log(arr)


// Polyfill for reduce method
let sumReduce = function(accumulator, currentValue) {
    return accumulator + currentValue
}
// let sum = arr.reduce(sumReduce, 0)

// console.log(sum)

Array.prototype.myReduce = function(cb, initialValue) {
    let accumulator, startIndex
    if(initialValue) {
        accumulator = initialValue
        startIndex = 0
    } else {
        accumulator = this[0]
        startIndex = 1
    }
    for(var i = startIndex; i < this.length; i++) {
        accumulator = cb(accumulator, this[i])
    }
    return accumulator
}

let arr2 = []

let sum = arr2.myReduce(sumReduce)
let sum2 = arr2.reduce(sumReduce)

console.log(sum)
console.log(sum2)


