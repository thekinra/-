const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
const navlist = document.querySelector('.nav-list');
const menu = document.querySelector("#menu-icon");
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle('active-list');
}
window.onscroll = () => {
    if (window.scrollY > 30) {
        navbar.classList.add('nav-active');
        logo.classList.add('logo-white');
    } else {
        navbar.classList.remove('nav-active');
        logo.classList.remove('logo-white');

    }
};