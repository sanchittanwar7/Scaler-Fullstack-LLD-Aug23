let arr = [1,2,3,4,5]

// access an element
console.log(arr[2]);

// length of array
console.log("Length of array " + arr.length)

// push an element at the end of the array
// let arr2 = [6,7,8,9]
// arr.push(...arr2)  spread operator
// arr.push(6)
// arr.push(7)
// arr.push(8)
// arr.push(9)
// console.log(arr)

// pop an element from the end of the array
let lastElement = arr.pop()
console.log(arr, lastElement)

// add element to the start
arr.unshift(0)
console.log(arr)

// remove element from the start
arr.shift()
console.log(arr)