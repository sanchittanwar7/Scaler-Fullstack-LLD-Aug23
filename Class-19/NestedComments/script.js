let commentContainer = document.querySelector('.comments-container')

const createInputBox = () => {
    let div = document.createElement('div')
    div.setAttribute('class', 'comment-reply-section')

    div.innerHTML = `<input type="text" class="input" placeholder="Write reply">
    <button class="btn submit">Submit</button>`

    return div
}

const createReply = (text) => {
    let div = document.createElement('div')
    div.setAttribute('class', 'all-comments')

    div.innerHTML = `<div class="card">
        <span class="text">${text}</span>
        <span id="reply" class="reply">Add reply</span>
    </div>`

    return div
}

commentContainer.addEventListener('click', event => {
    let replyBtnClicked = event.target.classList.contains('reply')
    let submitBtnClicked = event.target.classList.contains('submit')

    // 1. Find the closest comment
    let closestCard = event.target.closest('.all-comments')

    if (replyBtnClicked) {
        // add the reply section

        // 2. Add reply section to closestCard
        let inputBox = createInputBox()
        closestCard.appendChild(inputBox)
    } 
    if (submitBtnClicked) {
        // append the reply to the comment
        let commentClosest = event.target.closest('.comment-reply-section')
        let inputSection = commentClosest.children[0]
        let inputText = inputSection.value

        if (inputText) {
            let replyComment = createReply(inputText)
            closestCard.appendChild(replyComment)
            commentClosest.remove()
        }
    }
})