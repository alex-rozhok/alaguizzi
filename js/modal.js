let modalWindow = document.querySelectorAll('.modal')
let openModal = document.querySelectorAll('.open-modal');

for (let i=0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', showModal);
}

function showModal() {
    event.preventDefault();
    event.stopPropagation();

    document.body.style.cssText += "overflow-y:hidden;";
    document.documentElement.style.cssText += "overflow-y:hidden;";
   
        for (let i=0; i < modalWindow.length; i++) {
             (this.dataset.slide == modalWindow[i].dataset.slide) ? modalWindow[i].classList.add('show-modal') : false;
        };

       document.addEventListener('mousedown', modalisOpen);
       document.addEventListener('keydown', pressEsc);
};

function modalisOpen() {
    let target = event.target;

        if (!target.closest('.slider') || target.matches('.close-modal')) {
            hiddenModal();
    }
}

function hiddenModal() {
    let itsModal = document.querySelector('.modal.show-modal');
    itsModal.classList.remove('show-modal');
        document.body.style.cssText += "overflow-y:auto;";
        document.documentElement.style.cssText += "overflow-y:auto;";

        document.removeEventListener('mousedown', hiddenModal);
        document.removeEventListener('keydown', pressEsc);
        document.removeEventListener('mousedown', modalisOpen);
}

function pressEsc(e) {
    if(e.code == 'Escape') {
        hiddenModal();
    }
}
