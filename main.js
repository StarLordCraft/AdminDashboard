import handleClickOutside from './mobile.js'
import setProgressBar from './interactions.js';
import darkMode from './darkMode.js';

function openMenu(event){
    event.preventDefault();
    menu.classList.add('open');

    handleClickOutside(header, closeMenu);
}

function closeMenu(event){
    event.preventDefault()
    menu.classList.remove('open');
}


const menu = document.getElementById('menu');
const header = document.querySelector('header');

const btnOpenMenu = document.getElementById('open-menu');
const btnCloseMenu = document.getElementById('close-menu');

btnOpenMenu.addEventListener('click', openMenu)
btnOpenMenu.addEventListener('touchstart', openMenu)

btnCloseMenu.addEventListener('click', closeMenu)
btnCloseMenu.addEventListener('touchstart', closeMenu)

//=================================END MOBILE INTERATIONS========================================================

//=====================================BAR INTERATIONS===========================================================

const salesBar = document.getElementById('salesBar')
const sales = eval(document.querySelector('.insight-card:nth-child(1) .insight-info > h2').innerHTML.split('.')[0].concat
(document.querySelector('.insight-info:nth-child(1) > h2').innerHTML.split('.')[1].split('$')[0]));
//pythonic? kkkkkk lol
const salesGoal = eval(document.querySelector('.insight-card:nth-child(1) .insight-info > h5').innerHTML.split('.')[0].concat
(document.querySelector('.insight-info:nth-child(1) > h2').innerHTML.split('.')[1].split('$')[0]));
const percentageSales = document.querySelector('#percentageSales'); 

const expansesBar = document.getElementById('expansesBar')
const expanses = eval(document.querySelector('.insight-card:nth-child(2) .insight-info > h2').innerHTML.split('.')[0].concat
(document.querySelector('.insight-info:nth-child(1) > h2').innerHTML.split('.')[1].split('$')[0]));
const percentageExpanses = document.getElementById('percentageExpanses')

const incomeBar = document.getElementById('incomeBar');
const income = sales - expanses;
const percentageIncome = document.getElementById('percentageIncome')

//to be done = set create a way to change the income value dinamically.

setProgressBar(salesBar, percentageSales, sales, salesGoal, '#41f1b6', '#ff7782'); 
/*this function can be used to set the progress bar if conected to a back end
it should be used to change the bar dinamically*/ 
setProgressBar(expansesBar, percentageExpanses, expanses, sales, '#ff7782', '#41f1b6');
setProgressBar(incomeBar, percentageIncome, income, sales, '#41f1b6', '#ff7782'); 


//=========================================END OF BAR INTERATIONS==============================================================

const toggleThemeBtn = document.querySelector('.theme-toggle');
toggleThemeBtn.addEventListener('click', darkMode);
toggleThemeBtn.addEventListener('touchstart', (event) => {
    event.preventDefault();
    darkMode();
})