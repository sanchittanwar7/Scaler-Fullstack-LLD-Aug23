let placeOrder = (drink) => {
    return new Promise((resolve, reject) => {
        if (drink == 'coffee') {
            resolve('Order for coffee placed')
        } else {
            reject('Order can not be placed')
        }
    })
}

let processOrder = orderStatus => {
    return new Promise(resolve => {
        resolve(`${orderStatus} and served`)
    })
}

let generateBill = processOrderStatus => {
    return new Promise(resolve => {
        resolve(`${processOrderStatus} and bill is generated`)
    })
}

// placeOrder('coffee').then(orderStatus => {
//     console.log(orderStatus)
//     return orderStatus
// })
// .then(orderStatus => {
//     let processOrderStatus = processOrder(orderStatus)
//     return processOrderStatus
// })
// .then(processOrderStatus => {
//     console.log(processOrderStatus)
//     return processOrderStatus
// }).then(processOrderStatus => {
//     let billGenerated = generateBill(processOrderStatus)
//     return billGenerated
// }).then(billGenerated => {
//     console.log(billGenerated)
// }).catch(error => {
//     console.log(error)
// })

// Async Await

async function serveOrder() {
    let orderStatus = await placeOrder('coffee')
    console.log(orderStatus)
    let processOrderStatus = await processOrder(orderStatus)
    console.log(processOrderStatus)
    let billGenerated = await generateBill(processOrderStatus)
    console.log(billGenerated)
}

serveOrder()
