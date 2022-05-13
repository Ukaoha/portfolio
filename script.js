'use strict'
const toggleBar = document.querySelector('.toggle-bar');
const navLinks = document.querySelectorAll('.nav-item');
 toggleBar.addEventListener('click' , function(){
    navLinks.forEach(nav => nav.classList.toggle('active'))
});







