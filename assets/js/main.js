const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// Write your Js code here 
const hamburger = document.querySelector(".hamburger")

const navMenu = document.querySelector (".nav-menu")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})