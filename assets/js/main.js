const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// Write your Js code here 
const menu = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});