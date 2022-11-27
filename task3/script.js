let redCircle = document.querySelector('#trafficLight');
let yellowCircle = document.querySelector('#trafficLight2');
let greenCircle = document.querySelector('#trafficLight3');

addEventListener('click',e => {
   if (e.target === redCircle){
        redCircle.style.background = 'red';
    } else {
        redCircle.style.background = '';
    }

    if(e.target === yellowCircle){
        yellowCircle.style.background = 'yellow';
    } else {
        yellowCircle.style.background = '';
    }

   if (e.target === greenCircle) {
     greenCircle.style.background = 'green';
    } else {
        greenCircle.style.background = '';
    }
});