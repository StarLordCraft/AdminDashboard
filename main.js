import handleClickOutside from './mobile.js'

function openMenu(event){
    event.preventDefault();

    
    menu.classList.add('active');

    handleClickOutside(header, closeMenu);
}

function closeMenu(){
    menu.classList.remove('active');
}


const menu = document.getElementById('menu');
const header = document.querySelector('header');
const btnOpenMenu = document.getElementById('open-menu');
const btnCloseMenu = document.getElementById('close-menu');

btnOpenMenu.addEventListener('click', openMenu)
btnOpenMenu.addEventListener('touchstart', openMenu)

btnCloseMenu.addEventListener('click', closeMenu)
btnCloseMenu.addEventListener('touchstart', closeMenu)