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