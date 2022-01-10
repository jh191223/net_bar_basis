const menu = document.querySelector('.nav_menu');
const links = document.querySelector(".navbar_links");
const btn = document.querySelector(".toggleBtn");

btn.addEventListener('click', () => {
    links.classList.toggle('active');
    menu.classList.toggle('active');
}) ;