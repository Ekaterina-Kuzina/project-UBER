'use strict'
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('hamburger_active')) {
        hamburger.classList.remove('hamburger_active');
        menu.classList.remove('menu_active');
    } else {
        hamburger.classList.add('hamburger_active');
        menu.classList.add('menu_active');
    }
});