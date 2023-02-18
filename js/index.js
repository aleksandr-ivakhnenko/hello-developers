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

function openMenu() {
    bodyDocument.classList.add('scroll-lock');
	navMenu.classList.add('menu-open');
    btnMenu.classList.add('menu-open');
    overlay.classList.add('menu-open');
};

function closeMenu() {
    bodyDocument.classList.remove('scroll-lock');
	navMenu.classList.remove('menu-open');
    btnMenu.classList.remove('menu-open');
    overlay.classList.remove('menu-open');
};


function openPopupMentor() {
    bodyDocument.classList.add('scroll-lock');
    popupMentor.classList.add('popup-open');
    btnMentor.classList.add('popup-open');

    if (navMenu.classList.contains('menu-open')) {
        closeMenu();
        bodyDocument.classList.add('scroll-lock');
    }
};

function closePopupMentor() {
    bodyDocument.classList.remove('scroll-lock');
    popupMentor.classList.remove('popup-open');
    btnMentor.classList.remove('popup-open');
};

function openPopupFeedback() {
    bodyDocument.classList.add('scroll-lock');
    popupFeedback.classList.add('popup-open');
    btnFeedback.classList.add('popup-open');

    if (navMenu.classList.contains('menu-open')) {
        closeMenu();
        bodyDocument.classList.add('scroll-lock');
    }
};

function closePopupFeddback() {
    bodyDocument.classList.remove('scroll-lock');
    popupFeedback.classList.remove('popup-open');
    btnFeedback.classList.remove('popup-open');
};


btnMenu.addEventListener('click', openMenu);
btnMenuClose.addEventListener('click', closeMenu);

linkResult.addEventListener('click', closeMenu);

overlay.addEventListener('click', closeMenu);

btnMentor.addEventListener('click', function(e) {
    e.preventDefault();
    openPopupMentor();
});

linkMentor.addEventListener('click', function(e) {
    e.preventDefault();
    openPopupMentor();
    btnMentor.classList.remove('popup-open');
});

btnFeedback.addEventListener('click', function(e) {
    e.preventDefault();
    openPopupFeedback();
});

linkFeedback.addEventListener('click', function(e) {
    e.preventDefault();
    openPopupFeedback();
    btnMentor.classList.remove('popup-open');
});

btnPopupCloseMentor.addEventListener('click', closePopupMentor);

btnPopupCloseFeedback.addEventListener('click', closePopupFeddback);