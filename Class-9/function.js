function func1() {
    console.log("Traditional way")
}

// func1();

let func2 = function() {
    console.log("Function Expression")
}

// func2()

let func3 = () => {
    console.log("Arrow functions")
}

let sum = (a,b) => {
    return a+b;
}

let square = a => a*a

// func3()
let ans = square(3)
console.log(ans)
