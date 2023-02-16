const btnClose = document.querySelector('.js-btn-close');
const btnMenu = document.querySelector('.js-btn-menu');
const navMenu = document.querySelector('.js-nav-menu');
const menuLinkItem = document.querySelector('.js-link-item');

const headerLogo = document.querySelector('.js-header-logo');
const headerActions = document.querySelector('.js-header-actions');
const main = document.querySelector('.js-main');


const bodyDocument = document.body;
const wrapper = document.querySelector('.js-wrapper');

function openMenu() {
    bodyDocument.classList.add('open-nav-menu');
    wrapper.classList.add('open-nav-menu');
	navMenu.classList.add('active');
    btnMenu.classList.add('active')
};

function closeMenu() {
    bodyDocument.classList.remove('open-nav-menu');
    wrapper.classList.remove('open-nav-menu');
	navMenu.classList.remove('active');
    btnMenu.classList.remove('active')
};

btnMenu.addEventListener('click', openMenu);

btnClose.addEventListener('click', closeMenu);
menuLinkItem.addEventListener('click', closeMenu);
headerLogo.addEventListener('click', closeMenu);
headerActions.addEventListener('click', closeMenu);
main.addEventListener('click', closeMenu);