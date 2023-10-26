const task1 = () => {
    console.log("Completed task 1")
}

const heavyTaskBlocking = () => {
    console.log("Performing it in a sync fashion")
    var start = Date.now()
    while(Date.now() - start < 5000) {

    }
    console.log("Completed heavy task")
}

const heavyTaskNonBlocking = () => {
    console.log("Skipping it. Will perform it async")
    setTimeout(() => {
        console.log("Completed heavy task")
    }, 5000);
}

const task2 = () => {
    console.log("Completed task 2")
}

task1()
// heavyTaskBlocking()
heavyTaskNonBlocking()
task2()