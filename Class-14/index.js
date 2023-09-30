let addBtn = document.querySelector('.add-btn');
let modalCont = document.querySelector('.modal-cont')
let allPriorityColors = document.querySelectorAll('.pririty-color')
let textAreaCont = document.querySelector('.textArea-cont')
let mainCont = document.querySelector('.main-cont')
let removeBtn = document.querySelector('.remove-btn')

let addTaskFlag = false
let removeTaskFlag = false
let modalPriorityColor = 'lightpink'

addBtn.addEventListener('click', (event) => {
    addTaskFlag = !addTaskFlag;
    console.log('Add button is clicked')

    if (addTaskFlag == true) {
        //show
        modalCont.style.display = 'flex'
    } else {
        //hide
        modalCont.style.display = 'none'
    }
})

// Selecting ticket color
allPriorityColors.forEach(colorEle => {
    colorEle.addEventListener('click', event => {
        // remove active class from all divs
        allPriorityColors.forEach(priorityColor => {
            priorityColor.classList.remove('active')
        })

        // add active clas on div that is clicked
        colorEle.classList.add('active')

        modalPriorityColor = colorEle.classList[0]
    })
})

// Ticket Creation
modalCont.addEventListener('keydown', event => {
    let keyPressed = event.key

    if (keyPressed === 'Shift') {
        // ticket create
        let ticketDesc = textAreaCont.value
        let ticketId = shortid()
        createTicket(modalPriorityColor, ticketId, ticketDesc)
        // close modal
        modalCont.style.display = 'none'
        addTaskFlag = !addTaskFlag
        // clear textarea
        textAreaCont.value = ''
    }
})

function createTicket (ticketColor, ticketId, ticketDesc) {
    let ticketCont = document.createElement('div')

    ticketCont.classList.add('ticket-cont');

    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div><div class="ticket-id">${ticketId}</div><div class="task-area">${ticketDesc}</div>`

    mainCont.appendChild(ticketCont)
    
    handleRemove(ticketCont)
}

// Selecting remove button
removeBtn.addEventListener('click', (event) => {
    removeTaskFlag = !removeTaskFlag

    if (removeTaskFlag == true) {
        // show alert
        alert("Delete mode is activated")
        // change icon color to red
        removeBtn.style.color = 'red'
    } else {
        // change icon color to white
        removeBtn.style.color = 'white'
    }
})

function handleRemove(ticket) {
    ticket.addEventListener('click', event => {
        if (removeTaskFlag == true) {
            // remove ticket
            // ticket.style.display = 'none'
            ticket.remove()
        }
    })
}



