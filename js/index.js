const btnMenuClose = document.querySelector('.js-btn-menu-close');
const btnMenu = document.querySelector('.js-btn-menu');
const navMenu = document.querySelector('.js-nav-menu');

const btnMentor = document.querySelector('.js-btn-mentor');
const popupMentor = document.querySelector('.js-popup-mentor');
const btnPopupClose = document.querySelector('.js-btn-popup-close');

const overlay = document.querySelector('.js-overlay');
const linkItemScroll = document.querySelector('.js-link-item-scroll');
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


function openPopup() {
    bodyDocument.classList.add('scroll-lock');
    popupMentor.classList.add('popup-open');
    btnMentor.classList.add('popup-open');
};

function closePopup() {
    bodyDocument.classList.remove('scroll-lock');
    popupMentor.classList.remove('popup-open');
    btnMentor.classList.remove('popup-open');
};


btnMenu.addEventListener('click', openMenu);
btnMenuClose.addEventListener('click', closeMenu);
linkItemScroll.addEventListener('click', closeMenu);

overlay.addEventListener('click', closeMenu);

btnMentor.addEventListener('click', function(e) {
    e.preventDefault()
    openPopup()
});

btnPopupClose.addEventListener('click', closePopup);

overlay.addEventListener('click', closePopup);