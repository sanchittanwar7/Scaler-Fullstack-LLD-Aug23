// Polymorphism
class Person {
    constructor(_name) {
        this.name = _name
        this.greet = function() {
            console.log(`HI! My name is ${this.name}`)
        }
    }
}

let person1 = new Person('Sanchit')
let person2 = new Person('Sandeep')

person1.greet()
person2.greet()

// class Student extends Person {
//     constructor(_name, _age) {
//         super(_name)
//         this.age = _age
//         this.greet = function() {
//             console.log(`Hi! Im a student here and my name is ${this.name}`)
//         }
//     }
// }

// let student1 = new Student('Sanchit', 26)
// student1.greet()
// person1.greet()

// Encapsulation
// let student = {}
// student.name = 'Sanchit'
// student.age = 26
// student.cgpa = 7
// student.bankAccountNumber = '12345'

// class Student {
//     #bankAccountNumber
//     constructor(_name, _age, _cgpa, _bankAccountNumber) {
//         this.name = _name
//         this.age = _age
//         this.cgpa = _cgpa
//         this.#bankAccountNumber = _bankAccountNumber
//         this.getBankAccountNumber = function getBankAccountNumber() {
//             console.log(this.#bankAccountNumber)
//         }
//     }
// }

// let student2 = new Student('Sanchit', 26, 8, 12345)

// console.log(student2)

// console.log(student2.#bankAccountNumber) - throw error
// student2.getBankAccountNumber()


// Abstraction
class Customer {
    #accountBalance
    constructor(_accountBalance) {
        this.#accountBalance = _accountBalance
        // getter func
        this.getAccountBalance = function getAccountBalance() {
            // if user is autohorised
            return this.#accountBalance
        }
        // setter func
        this.setAccountBalance = function setAccountBalance(_accountBalance) {
            if (_accountBalance > 0) {
                this.#accountBalance = _accountBalance
            }
        }
    }
}

let customer = new Customer(100)

// console.log(customer.#accountBalance)
// customer.#accountBalance = -10
// console.log(customer.accountBalance)
console.log(customer.getAccountBalance())
console.log(customer.setAccountBalance(-120))
console.log(customer.getAccountBalance())