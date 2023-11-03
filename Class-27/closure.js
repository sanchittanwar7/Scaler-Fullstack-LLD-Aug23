function parent() {
    var a = 10
    function child() {
        var b = 20
        function grandchild() {
            console.log(a+b)
        }
        return grandchild 
    }
    return child
}

// var childFunc = parent()

// var grandChildFunc = childFunc()

// grandChildFunc()

parent()()()

const sum = a => b => c => a+b+c

console.log(sum(1)(2)(3))