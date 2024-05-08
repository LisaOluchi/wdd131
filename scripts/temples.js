
const hamburgerBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');


function toggleMenu() {
  navMenu.classList.toggle('show');
}

hamburgerBtn.addEventListener('click', toggleMenu);


const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;


const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;

