const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);

document.getElementById("value").addEventListener("keyup", filterSearch);
function filterSearch(){

   var value,name,profile,i;
    value = document.getElementById('value').value.toUpperCase();
    profile = document.getElementsByClassName('course_card');

  for(i=0;profile.length;i++){
    name = profile[i].getElementsByClassName('course_title');
    if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
      profile[i].style.display ="flex";
    }else{
      profile[i].style.display = "none";
    }
  }  
}
