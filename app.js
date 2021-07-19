const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', Hamburger)
function Hamburger(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};
new TypeIt("#simpleUsage", {
  strings: "Yoo!, I'm Ronnayot Jaisai New Graduate From Silpakorn University Information Technology",
  speed: 50,
  waitUntilVisible: true
}).go();
