function getEmailGlobal(domain, greet) {
    console.log(greet)
    return (`${this.firstName}.${this.lastName}@${domain}.com`);
}

let student1 = {
    firstName: 'Adam',
    lastName: 'Smith',
    age: 25,
    
    getEmail: getEmailGlobal
};

let student2 = {
    firstName: 'Sanchit',
    lastName: 'Smith',
    age: 25,
    
    getEmail: getEmailGlobal
};


// Call method
// <function_to_be_invoked>.call(<value_of_this_that_we_want_to_use>)
// console.log(student1.getEmail.call(student1))
// console.log(getEmailGlobal.call(student1))

// Call method with arguments
// console.log(getEmailGlobal.call(student1, 'gmail', "hi"))
// console.log(getEmailGlobal.call(student1, 'yahoo', 'hello'))
// console.log(getEmailGlobal.call(student2, 'scaler', 'namaste'))

// Apply method
let args = ['gmail', "hi"]
// console.log(getEmailGlobal.apply(student1, args))
// console.log(getEmailGlobal.apply(student1, ['yahoo', 'hello']))
// console.log(getEmailGlobal.apply(student2, ['scaler', 'namaste']))

// Bind Method
let callLater = getEmailGlobal.bind(student1, "gmail", "hi")
console.log(callLater)
// ...later in code
console.log(callLater())
