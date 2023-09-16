function pure(a, b) {
    let sum = a+b;
    return sum;
}

let sum = pure(1,2);
pure(1,2);

pure(1,2);
pure(1,2);

pure(1,2);
console.log(sum);

var a = 10;
function impure(b){
    b = b+a;
    a++;
    return b;
}

console.log(impure(5));
console.log(impure(5));
console.log(impure(5));
console.log(impure(5));

console.log(Math.random())