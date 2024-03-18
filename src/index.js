import './styles/main.scss';
import {logo,facebookLogo,depositPhotos,vkLogo,gorodkvadratov} from './assets';

const  depositPhotosEl = document.querySelector('.content__image');
depositPhotosEl.src = depositPhotos;

const logoEl = document.querySelector('.header__logo');
logoEl.src = logo;

const facebookLogoEl = document.querySelector('.social__fb');
facebookLogoEl.src = facebookLogo;

const vkLogoEl = document.querySelector('.social__vk');
vkLogoEl.src = vkLogo;


const  timerBtn = document.querySelector('#timer__btn');
timerBtn.addEventListener('click', ()=>{
    location.reload();
})

function startTimer(duration,display){
    var timer = duration, minutes, seconds;
    setInterval(function(){
        minutes = parseInt(timer/60,10);
        seconds = parseInt(timer%60,10);

        minutes = minutes < 10 ? '0' + minutes:minutes;
        seconds = seconds < 10 ? '0' + seconds:seconds;

        display.textContent = minutes + ':' + seconds;
        if(--timer <0){
            clearInterval();
          window.location.reload();
        }
    },1000)
}

window.onload = function(){
    var start = 30*60;
    const timerDisplay = document.querySelector('.timer__display');
startTimer(start,timerDisplay)

}
