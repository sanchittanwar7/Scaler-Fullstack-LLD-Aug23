"use strict"

// Case 1: Global context
// console.log("Global Context | this: ", this)

// Case 2: Functional Context
// function func() {
//     console.log("Function Context | this: ", this)
// }

// func()

// Case 3: In object method
// let obj = {
//     name: 'name',
//     func: function func() {
//         console.log("In object method | this: ", this)
//     }
// }

// obj.func()

// Case 4: In nested functions
let obj = {
    name: 'name',
    func: function func() {
        function func2() {
            console.log("In nested method | this: ", this)
        }
        func2()
    }
}

obj.func()