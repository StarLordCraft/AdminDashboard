export default function darkMode(){
    const body = document.querySelector('body');
    
    body.classList.toggle('dark');
    
    const lightMode = document.getElementById('light');
    const darkMode = document.getElementById('dark');

    if(body.classList.contains('dark')){
        darkMode.classList.add('currentTheme');
        lightMode.classList.remove('currentTheme');
    }else{
        lightMode.classList.add('currentTheme');
        darkMode.classList.remove('currentTheme');
    }
    
}