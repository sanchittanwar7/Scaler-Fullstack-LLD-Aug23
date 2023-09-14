let numbers = [1,2,3,4,5,6]

// Map function
//The map() method of Array instances creates a new array populated with the 
// results of calling a provided function on every element in the calling array.
let squareOfNumber = numbers.map(function(number, index) {
    console.log("Number is : ", number)
    console.log("Index is ", index)
    return number*number
});
console.log(squareOfNumber)

// Filter function
// The filter() method of Array instances creates a shallow copy of a portion of a 
// given array, filtered down to just the elements from the given array that pass the 
// test implemented by the provided function.
let transactions = [100, 200, 300, 400, 500, 600]

let creditTransactions = transactions.filter(function(transaction) {
    return transaction > 0;
});
console.log(creditTransactions)
console.log(transactions)

//ForEach
// The forEach() method of Array instances executes a provided function 
// once for each array element.
numbers.forEach(function(number, index) {
    console.log(index)
    console.log(number*number);
})
console.log(numbers)

// Reduce
// The reduce() method of Array instances executes a user-supplied "reducer" callback 
// function on each element of the array, in order, passing in the return value from the 
// calculation on the preceding element. The final result of running the reducer across 
// all elements of the array is a single value.


let sum = numbers.reduce(function(sum, number){
    sum = sum + number
    return sum
});

// if i dont provide an initialValue, then the first element in my list with become
// initialValue and the looping with start from 1st index (instead of 0th index)

console.log(sum)

// Every
// The every() method of Array instances tests whether all elements in the array pass 
// the test implemented by the provided function. It returns a Boolean value.
let areAllCredit = transactions.every(function(transaction) {
    return transaction > 0;
});
// console.log(areAllCredit)

// Some
// The some() method of Array instances tests whether at least one element in the array 
// passes the test implemented by the provided function. It returns true if, in the array, 
// it finds an element for which the provided function returns true; otherwise it returns 
// false. It doesn't modify the array.
let isAnyDebit = transactions.some(function(transaction) {
    return transaction < 0;
});
console.log(isAnyDebit)

// Function Chaining

let creditTransationsInUSD = transactions.map(function(transaction) {
    return transaction/82
}).filter(function(transactionInUSD) {
    return transactionInUSD > 0
});

console.log(creditTransationsInUSD);

