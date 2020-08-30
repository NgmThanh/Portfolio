/* ============ SCRIPT ANIMATIONS ON PAGE LOAD ============ */

/* ----- MENU ----- */

var menu = document.querySelector('.menu');
var menuLabel = document.querySelector('.label-menu');
var menuItem = document.querySelectorAll('.menu--text');

// add menu default animations
menu.classList.add("fade-in");
menuLabel.classList.add("slide-in-menu-label");
menuItem.forEach(item => {
    item.classList.add('slide-left-in');
});

/* ----- WORK WINDOW ----- */

var workWindow = document.querySelectorAll(".work-window");
var slides = document.querySelectorAll(".slide");

// add work window default animations
workWindow.forEach(work => {
    work.classList.add("box-slide-in");
});

slides.forEach(slide => {
    slide.classList.add("fade");
});