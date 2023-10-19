class Person {
    // constructor function
    constructor(_name, _age, _gender) { 
        this.age = _age
        this.gender = _gender
        this.greet = function greet() {
            console.log(`${this.name} says hello`)
        }
        this.name = _name
    }

    static getOlderPerson(person1, person2) {
        if (person1.age > person2.age) {
            console.log(`${person1.name} is older`)
        } else {
            console.log(`${person2.name} is older`)
        }
    }

}

let person1 = new Person('Sanchit', 26, 'male')
let person2 = new Person('Sandeep', 36, 'male')

// console.log(person1)

person1.greet()
// person2.greet()

person1.saybye = function saybye() {
    console.log("bye")
}

person1.saybye()

// console.log(person1)

Person.getOlderPerson(person1, person2)
