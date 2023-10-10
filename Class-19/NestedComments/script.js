let commentContainer = document.querySelector('.comments-container')

const createInputBox = () => {
    let div = document.createElement('div')
    div.setAttribute('class', 'comment-reply-section')

    div.innerHTML = `<input type="text" class="input" placeholder="Write reply">
    <button class="btn submit">Submit</button>`

    return div
}

commentContainer.addEventListener('click', event => {
    let replyBtnClicked = event.target.classList.contains('reply')
    let submitBtnClicked = event.target.classList.contains('submit')



    if (replyBtnClicked) {
        // add the reply section
        // 1. Find the closest comment
        let closestCard = event.target.closest('.all-comments')
        // 2. Add reply section to closestCard
        let inputBox = createInputBox()
        closestCard.appendChild(inputBox)
    } 
    if (submitBtnClicked) {
        // append the reply to the comment
    }
})