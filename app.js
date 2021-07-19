const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', Hamburger)
function Hamburger(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};
new TypeIt("#simpleUsage", {
  strings: "This is a simple string.",
  speed: 50,
  waitUntilVisible: true
}).go();
