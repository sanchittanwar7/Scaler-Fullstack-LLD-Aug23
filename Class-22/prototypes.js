let arr = [4,2,5,6,3,4,7]
// console.log(arr)

let person5 = {
    name: 'Sanchit',
    gender: 'male',
    age: 26
}

// console.log(obj.toString())

class Person {
    // constructor function
    constructor(_name, _age, _gender) { 
        this.age = _age
        this.gender = _gender
        // this.greet = function greet() {
        //     console.log(`${this.name} says hello`)
        // }
        this.name = _name
    }

    greet() {
        console.log(`${this.name} says hello`)
    }
}

let person1 = new Person('Sanchit', 26, 'male')
let person2 = new Person('Sanchit', 26, 'male')
let person3 = new Person('Sanchit', 26, 'male')
let person4 = new Person('Sanchit', 26, 'male')
console.log(person1)
// console.log(person2)
// console.log(person3)
// console.log(person4)
console.log(person5)

// person1.prototype.whoIsYourMaster = function() {
//     console.log("Sanchit is my master")
// }

// console.log(person1)

let arrayprototype = Object.getPrototypeOf(arr)

let objectPrototype = Object.getPrototypeOf(arrayprototype)
let protoOfObjectProto = Object.getPrototypeOf(objectPrototype)

console.log(protoOfObjectProto)

