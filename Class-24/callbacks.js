let data = []

const task1 = () => {
    console.log("Completed task 1")
}

const task2 = () => {
    console.log("Completed task 2")
}

const fetchResponseBlocking = () => {
    console.log("Making a sync API call")
    // Mimicking API call
    var start = Date.now()
    while(Date.now() - start < 5000) {

    }
    data.push({
        name: 'Sanchit',
        age: 26
    })
    console.log("Got the API response")
}

const fetchResponseNonBlocking = () => {
    console.log("Skipping it. Will handle it async")
    setTimeout(() => {
        console.log("Got the API response")
        data.push({
            name: 'Sanchit',
            age: 26
        })
    }, 5000)
}

const fetchResponseNonBlockingCallback = (renderResponse) => {
    console.log("Skipping it. Will handle it async")
    setTimeout(() => {
        console.log("Got the API response")
        data.push({
            name: 'Sanchit',
            age: 26
        })
        renderResponse()
    }, 5000)
}

const renderResponse = () => {
    console.log("Rendering")
    const body = document.querySelector('body')
    const div = document.createElement('div')
    div.innerText = `Name: ${data[0].name} | Age: ${data[0].age}`
    body.appendChild(div)
}

task1()
// fetchResponseBlocking()
// fetchResponseNonBlocking()
fetchResponseNonBlockingCallback(renderResponse)
// renderResponse()
task2()