'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal')

const handleClick = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const handleClose = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const handleCloseEsc = (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden'))
        handleClose();
}
//handling different events
for (let ele of showModal) {
    ele.addEventListener('click', handleClick);
}
btnCloseModal.addEventListener('click', handleClose);
overlay.addEventListener('click', handleClose);
document.addEventListener('keydown', handleCloseEsc);
