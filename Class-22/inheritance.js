class Person {
    // constructor function
    constructor(_name, _age, _gender) { 
        this.name = _name
        this.age = _age
        this.gender = _gender
        this.greet = function greet() {
            console.log(`${this.name} says hello`)
        }       
    }

    static func() {
        console.log('Im a static function')
    }
}

// Derived class : Class which is inheriting from someone else : Student
// Parent class: Class which is being inherited : Person
// constructor : constructor function of your derived class
// super constructor : constructor function of your parent class 

class Student extends Person {
    constructor(_name, _age, _gender, _cgpa, _batchName) {
        super(_name, _age, _gender)
        this.cgpa = _cgpa
        this.batchName = _batchName
    }
}

class Teacher extends Person {
    constructor(_name, _age, _gender, _averageRating, _batchStrength){
        super(_name, _age, _gender)
        this.averageRating = _averageRating
        this.batchStrength = _batchStrength
    }
}

let person1 = new Person('Rajesh', 25, 'male')
// console.log(person1)
person1.greet()

let student1 = new Student('Balla', 30, 'male', '8.5', 'LLD Full stack')
// console.log(student1)
student1.greet()

let teacher1 = new Teacher('Sanchit', 26, 'male', 4, 100)
console.log(teacher1)
Teacher.func()