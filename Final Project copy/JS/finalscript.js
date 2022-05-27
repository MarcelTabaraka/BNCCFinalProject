let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.oneclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.oneclick = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}