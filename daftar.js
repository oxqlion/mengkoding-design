const signinBtn = document.querySelector('.signin_btn');
const signupBtn = document.querySelector('.signup_btn');
const formBox = document.querySelector('.form_box');
const body = document.querySelector('body')

signupBtn.onclick = function(){
    formBox.classList.add('active')
    body.classList.add('active')
}

signinBtn.onclick = function(){
    formBox.classList.remove('active')
    body.classList.remove('active')
}