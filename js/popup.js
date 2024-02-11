const popup = document.getElementById('containerPopup');
const openPopup = document.querySelector('.openPopupBtn');
const openPopupTl = document.querySelector('.openPopupTl');
const closePopup = document.querySelector('.send-popup');


function openModalAndLockScroll() {
    popup.showModal();
    document.body.classList.add('scroll-lock');

}


function returnScroll() {
    document.body.classList.remove('scroll-lock')
}

function close() {
    popup.close()

}

function closeOnClick({ currentTarget, target }) {
    const popup = currentTarget
    const clickDrop = target === popup
    if (clickDrop) {
        close();
        returnScroll();
    }
}

popup.addEventListener('click', closeOnClick)
openPopup.addEventListener('click', openModalAndLockScroll)
openPopupTl.addEventListener('click', openModalAndLockScroll)
closePopup.addEventListener('click', (event) => {
    event.stopPropagation()
    close()
})