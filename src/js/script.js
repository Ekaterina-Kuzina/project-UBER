'use strict'
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu_item');


hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('hamburger_active')) {
        remove(hamburger, menu);
    } else {
        add(hamburger, menu);
    }
});
menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        remove(hamburger, menu);
    });
});

function remove(hamburger,menu){
    hamburger.classList.remove('hamburger_active');
    menu.classList.remove('menu_active');
}
function add(hamburger,menu){
    hamburger.classList.add('hamburger_active');
    menu.classList.add('menu_active');
}