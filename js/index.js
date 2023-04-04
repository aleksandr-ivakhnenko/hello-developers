const btnMenuClose = document.querySelector('.js-btn-menu-close');
const btnMenu = document.querySelector('.js-btn-menu');
const navMenu = document.querySelector('.js-nav-menu');

const btnMentor = document.querySelector('.js-btn-mentor');
const linkMentor = document.querySelector('.js-link-mentor');
const popupMentor = document.querySelector('.js-popup-mentor');
const btnPopupCloseMentor = document.querySelector('.js-btn-popup-close-mentor');

const btnFeedback = document.querySelector('.js-btn-feedback');
const linkFeedback = document.querySelector('.js-link-feedback');
const popupFeedback = document.querySelector('.js-popup-feedback');
const btnPopupCloseFeedback = document.querySelector('.js-btn-popup-close-feedback');

const overlay = document.querySelector('.js-overlay');
const linkResult = document.querySelector('.js-link-result');
const bodyDocument = document.querySelector('body');



function openCloseMenu() {
    bodyDocument.classList.toggle('scroll-lock');
	navMenu.classList.toggle('menu-open');
    btnMenu.classList.toggle('menu-open');
    overlay.classList.toggle('menu-open');
};

btnMenu.addEventListener('click', openCloseMenu);
btnMenuClose.addEventListener('click', openCloseMenu);
overlay.addEventListener('click', openCloseMenu);



linkResult.addEventListener('click', openCloseMenu);



function openClosePopup(popupName, btnName) {
    if (navMenu.classList.contains('menu-open')) {
        openCloseMenu();
    };
   
    bodyDocument.classList.toggle('scroll-lock');
    popupName.classList.toggle('popup-open');

    if (btnName === btnMentor) {
        btnName.classList.toggle('popup-open');
    }
};


btnMentor.addEventListener('click', (e) => {
    e.preventDefault();
    openClosePopup(popupMentor, btnMentor);
});

linkMentor.addEventListener('click', (e) => {
    e.preventDefault();
    openClosePopup(popupMentor, btnMentor);
});

btnPopupCloseMentor.addEventListener('click', () => {
    openClosePopup(popupMentor, btnMentor);
});


btnFeedback.addEventListener('click', (e) => {
    e.preventDefault();
    openClosePopup(popupFeedback, btnFeedback);
});

linkFeedback.addEventListener('click', (e) => {
    e.preventDefault();
    openClosePopup(popupFeedback, btnFeedback);
});

btnPopupCloseFeedback.addEventListener('click', () => {
    openClosePopup(popupFeedback, btnFeedback);
});