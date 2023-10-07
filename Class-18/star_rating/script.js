let starCont = document.querySelector('.star-container')
let ratingCount = document.querySelector('#star-rating')

let stars = document.querySelectorAll('.star')

starCont.addEventListener('click', (event) => {
    let currentClickedStart = event.target.dataset.index

    for(let i = 0; i < stars.length; i++) {
        stars[i].classList.remove('star-colored')
    }

    for(let i = 0; i < currentClickedStart; i++) {
        stars[i].classList.add('star-colored')
    }

    ratingCount.innerText = currentClickedStart
})