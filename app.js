const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);

const parallax = document.getElementById('parallax');

window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

const accordion = document.getElementsByClassName('content_box');

for (i = 0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('open')
    })
};

const mobilePrev = document.getElementById('mleft');
const mobileNext = document.getElementById('mright');
const mobileCarousel = document.querySelector('.mobile_slider_container .mobile_slides');

let size = 1;
let index = 0;


const nextSlide = () => {
    if(index === 2){
        mobileCarousel.style.transform = 'translateX(' + 0 + 'px)';
        mobileCarousel.style.transition = '.3s ease';
        index = 0;
        size = 1;
        return;
    }
    else if(index === 1){
        mobileCarousel.style.transform = 'translateX(' + -600 + 'px)';
        mobileCarousel.style.transition = '.3s ease';
        index = 2;
        size = 1;
        return;
    }
    else{
        mobileCarousel.style.transform = 'translateX(' + -300 + 'px)';
        mobileCarousel.style.transition = '.3s ease';
        index = 1;
        size = 1;
        return;
    }
};

mobileNext.addEventListener('click', nextSlide);

const prevSlide = () => {
    if(index === 0){
        mobileCarousel.style.transform = 'translateX(' + -600 + 'px)';
        mobileCarousel.style.transition = '.3 ease';
        index = 2;
        size = 1;
        return;
    }
    else if(index === 1){
        mobileCarousel.style.transform = 'translateX(' + 0 + 'px)';
        mobileCarousel.style.transition = '.3s ease';
        index = 0;
        size = 1;
        return;
    }
    else{
        mobileCarousel.style.transform = 'translateX(' + -300 + 'px)';
        mobileCarousel.style.transition = '.3s ease';
        index = 1;
        size = 1;
        return;
    }
};

mobilePrev.addEventListener('click', prevSlide);

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carousel = document.querySelector('.slider_container .slider');


const slideNext = () => {
    if(index === 2){
        carousel.style.transform = 'translateX(' + 0 + 'px)';
        carousel.style.transition = '.3s ease';
        index = 0;
        size = 1;
        return;
    }
    else if(index === 1){
        carousel.style.transform = 'translateX(' + -1300 + 'px)';
        carousel.style.transition = '.3s ease';
        index = 2;
        size = 1;
        return;
    }
    else{
        carousel.style.transform = 'translateX(' + -650 + 'px)';
        carousel.style.transition = '.3s ease';
        index = 1;
        size = 1;
        return;
    }
};

nextBtn.addEventListener('click', slideNext);

const slidePrev = () => {
    if(index === 0){
        carousel.style.transform = 'translateX(' + -1300 + 'px)';
        carousel.style.transition = '.3 ease';
        index = 2;
        size = 1;
        return;
    }
    else if(index === 1){
        carousel.style.transform = 'translateX(' + 0 + 'px)';
        carousel.style.transition = '.3s ease';
        index = 0;
        size = 1;
        return;
    }
    else{
        carousel.style.transform = 'translateX(' + -650 + 'px)';
        carousel.style.transition = '.3s ease';
        index = 1;
        size = 1;
        return;
    }
};

prevBtn.addEventListener('click', slidePrev);

window.addEventListener('scroll', function(){
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
})

