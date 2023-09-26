let addBtn = document.querySelector('.add-btn');
let modalCont = document.querySelector('.modal-cont')
let addTaskFlag = false

addBtn.addEventListener('click', (event) => {
    addTaskFlag = !addTaskFlag;

    if (addTaskFlag == true) {
        //show
        modalCont.style.display = 'flex'
    } else {
        //hide
        modalCont.style.display = 'none'
    }
})