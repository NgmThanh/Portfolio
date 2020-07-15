/* ============ SCRIPT MENU ============ */

/* ----- DESKTOP MENU ----- */

// html collection of class "menu--text"
var classMenu = document.getElementsByClassName('menu--text');
var arrayMenu = new Array();

// array menu items (except dark mode button)
for(var i = 0; i < classMenu.length-1; i++){
    arrayMenu.push(classMenu[i]);
}

// set event listener in all menu buttons
document.querySelectorAll('.menu--text').forEach(itemMenu => {
    
    itemMenu.addEventListener('click', () => {
        arrayMenu.forEach(element => {
            element.style.color = "";
        });
        itemMenu.style.color = "#FF5711";
    });
});

/* ----- MOBILE MENU ----- */

// change menu onclick hamburger icon
function changeMobile(menu) {
    var opened = document.getElementsByClassName("change");
    var menuMobile = document.getElementsByClassName("mobile-menu");
    // if menu closed
    if (opened.length === 0) {
        menuMobile[0].style.display = "block";
    }
    // if menu opened
    else {
        menuMobile[0].style.display = "none";
    }
    menu.classList.toggle("change");
}

// html collection of class "menu-display--text"
var classMenuMobile = document.getElementsByClassName('menu-display--text');
var arrayMenuMobile = new Array();

// array menu items (except dark mode button)
for(var i = 0; i < classMenuMobile.length-1; i++){
    arrayMenuMobile.push(classMenuMobile[i]);
}

// set event listener in all menu buttons
document.querySelectorAll('.menu-display--text').forEach(itemMenu => {
    
    itemMenu.addEventListener('click', () => {
        arrayMenuMobile.forEach(element => {
            element.style.color = "";
        });
        itemMenu.style.color = "#FF5711";
    });
});

/* ----- DARK / LIGHT MODE ----- */

// var lightMode = document.getElementsByClassName("light");

// // icons works
// var iconWorks = document.getElementsByClassName("icon-works");

// // change all switchs (desktop + mobile)
// document.querySelectorAll('.switch-mode').forEach(switchMode => {
    
//     switchMode.addEventListener('click', () => {

//         document.body.classList.toggle('light');
//         localStorage.setItem('theme',
//             document.body.classList.contains('light') ? 'light' : 'dark');

//         // work icons color
//         if (lightMode.length === 0) {
//             for (var i = 0; i < iconWorks.length; i++) {
//                 iconWorks[i].style.webkitFilter = "";
//             }
//         }
//         else {
//             for (var i = 0; i < iconWorks.length; i++) {
//                 iconWorks[i].style.webkitFilter = "none";
//             }
//         }

//     });
// });

// if (localStorage.getItem('theme') === 'light') {
//     document.body.classList.add('light');

//     for (var i = 0; i < iconWorks.length; i++) {
//         iconWorks[i].style.webkitFilter = "none";
//     }
// }

/* ----- PROGRESS BAR ----- */

// progress bar in scrolling
window.onload = () => {
    // Ecouteur d'évènement sur scroll
    window.addEventListener("scroll", () => {
        // Calcul de la hauteur "utile" du document
        let hauteur = document.documentElement.scrollHeight - window.innerHeight
        // Récupération de la position verticale
        let position = window.scrollY
        // Récupération de la largeur de la fenêtre
        let largeur = window.innerHeight
        // Calcul de la largeur de la barre
        let barre = position / hauteur * largeur
        // Modification du CSS de la barre
        document.getElementById("progress").style.height = barre+"px"
    });
};