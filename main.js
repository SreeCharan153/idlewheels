let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu")
};
//close menu
window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.classList.remove("open-menu");
}
window.onload = () => {
    let today = new Date().toISOString().split('T')[0];
    document.getElementById('start-date').value =today;
    document.getElementById('return-date').value= new Date(
        Date.now() * 7 * 9990000
    )
    .toISOString()
    .split('T')[0];
}
// animation
const animate = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
})
animate.reveal(".nav,.heading");
animate.reveal(".home-img img",{origin:"right"});
animate.reveal(".input-form",{origin:"bottom"});
animate.reveal(".rental-box",{interval:100});
function showregister(){
    document.getElementById("login-section").style.display="none";
    document.getElementById("register-section").style.display="flex";
}
function showlogin(){
    document.getElementById("register-section").style.display="none";
    document.getElementById("login-section").style.display="flex";
}
function showregisteralert(){
    let registeralert=document.getElementById("alertbox");
    registeralert.style.display="block";
    setTimeout(function() {
        registeralert.style.display="none";
    }, 4000);
    setTimeout(function() {
        showlogin();
    }, 4000);
}
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let registerbtn = document.getElementById("registerbtn");

function checkinputs(){

    if(
        username.value.trim() !== "" &&
        email.value.trim() !== "" &&
        password.value.trim() !== ""
    ){
        registerbtn.disabled = false;
        registerbtn.style.opacity="1";
        registerbtn.style.cursor="pointer";
    }
    else{
        registerbtn.disabled = true;
    }

}

username.addEventListener("input", checkinputs);
email.addEventListener("input", checkinputs);
password.addEventListener("input", checkinputs);
const registerform=document.getElementById('registerform');
registerform.addEventListener('input', () => {
    if(registerform.checkValidity()){
        registerbtn.disabled = false;
        registerbtn.style.opacity="1";
        registerbtn.style.cursor="pointer";
    }
    else{
        registerbtn= true;
    }
})



