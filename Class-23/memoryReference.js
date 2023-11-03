// Primitives
let str1 = "String"
let str2 = "Yet another string"

console.log(str1)
console.log(str2)

str2 = str1

// console.log(str1)
// console.log(str2)

// Reference Datatypes
let obj1 = {
    name: 'Sanchit',
    address: {
        city: 'Delhi'
    },
    marks: [1,2,3,4,5]
}

// let obj2 = obj1

// console.log("Before change")
// console.log(obj1)
// console.log(obj2)

// obj1.name = 'NewSanchit'

// console.log("After change")
// console.log(obj1)
// console.log(obj2)

// let obj2 = {...obj1}

// obj1.name = 'NewSanchit'
// obj1.address.city = 'Bangalore'

// console.log("After change")
// console.log(obj1)
// console.log(obj2)

// Deep Copy
// 1. Convert your object into string
let stringifiedCopyOfObj = JSON.stringify(obj1)
console.log(stringifiedCopyOfObj)

// 2. Convert String into object
let obj2 = JSON.parse(stringifiedCopyOfObj)
obj1.name = 'NewSanchit'
obj1.address.city = 'Bangalore'

console.log("After change")
console.log(obj1)
console.log(obj2)
