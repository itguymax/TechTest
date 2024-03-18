import './styles/main.scss';
import {logo,facebookLogo,depositPhotos,vkLogo} from './assets';

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


