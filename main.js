let openn = document.getElementById('open-btn')
let close = document.getElementById('close-btn')
let modal = document.querySelector('.modal-container')

openn.addEventListener('click', () => {
    modal.style.display = 'block'
})

close.addEventListener('click', () => {
    modal.style.display = 'none'
})
window.addEventListener('click', (e) => {
     if (e.target === modal) {
        modal.style.display = 'none'
     }
})

