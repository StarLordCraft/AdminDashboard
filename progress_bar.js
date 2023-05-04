export default function setProgressBar(bar, percentage, observed, reference, highcolor, lowcolor){
    bar.style.background = `conic-gradient(
        ${(observed / reference > 0.6)? highcolor : 
        (observed / reference < 0.5)? lowcolor : '#ffbb55'}
        ${(observed / reference) * 360}deg,
        #fff 0deg)`;

    percentage.innerHTML =  `${((observed / reference) * 100).toPrecision(3)}%`;
}