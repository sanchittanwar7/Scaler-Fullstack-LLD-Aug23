function add(a, b) {
    return a+b
}
function sub(a, b) {
    return a-b
}
function mul(a, b) {
    return a*b
}
function div(a, b) {
    return a/b
}

module.exports = {
    addition: add,
    subtract: sub,
    multiply: mul,
    divide: div,
    num: [1,2,3,4]
}