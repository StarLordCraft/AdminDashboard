export default function handleClickOutside(targetElement, callback){
    const html = document.documentElement;

    function handleHTMLClick(event){
        if(!targetElement.contains(event.target)){
            targetElement.removeAttribute('data-target');

            html.removeEventListener('click', handleHTMLClick);
            html.removeEventListener('touchstart', handleHTMLClick);
            
            callback(event);
        }
    }

    if(!targetElement.hasAttribute('data-target')){
        html.addEventListener('click', handleHTMLClick);
        html.addEventListener('touchstart', handleHTMLClick, {passive:false});

        targetElement.setAttribute('data-target', "");
    }
}