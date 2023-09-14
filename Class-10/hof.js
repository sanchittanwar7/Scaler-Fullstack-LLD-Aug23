let transaction = [100, -200, 300, 400, -500, 600]

// function filterCreditTransactions(transaction) {
//     let creditTransactions = []
//     for (let i = 0; i < transaction.length; i++) {
//         if (transaction[i] > 0) {
//             creditTransactions.push(transaction[i])
//         }
//     }
//     return creditTransactions;
// }

// let creditTransactions = filterCreditTransactions(transaction)
// console.log(creditTransactions)

// function filterDebitTransactions(transaction) {
//     let debitTransactions = []
//     for (let i = 0; i < transaction.length; i++) {
//         if (transaction[i] < 0) {
//             debitTransactions.push(transaction[i])
//         }
//     }
//     return debitTransactions
// }

// let debitTransactions = filterDebitTransactions(transaction)
// console.log(debitTransactions)


function isCredit(transaction) {
    return transaction > 0;
}

function isDebit(transaction) {
    return transaction < 0;
}

function filter(transaction, cb) {
    let filter = []
    for(let i = 0; i < transaction.length; i++) {
        if (cb(transaction[i])) {
            filter.push(transaction[i])
        }
    }
    return filter;
}

let creditTransactions = filter(transaction, isCredit)
let debitTransactions = filter(transaction, isDebit)

console.log(creditTransactions, debitTransactions)