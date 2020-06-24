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

var arraySwich = new Array();
var lightMode = document.getElementsByClassName("light");

// images works
var imageWorks = document.getElementsByClassName("image-works");

// change all switchs (desktop + mobile)
document.querySelectorAll('.switch-mode').forEach(switchMode => {
    
    switchMode.addEventListener('click', () => {
        var style = document.documentElement.style;
    
        // if light theme activated
        if (lightMode.length == 0) {
            switchMode.classList.add('light');
            style.setProperty('--material-color', '#dddddd');
            style.setProperty('--background-color', '#f5f5f5');
            style.setProperty('--border-color', '#dadada');
            style.setProperty('--font-color', '#121212');
            style.setProperty('--shadow-color', '#8f8f8f');
            style.setProperty('--input-color', '#f5f5f5');
    
            for (var i = 0; i < imageWorks.length; i++) {
                imageWorks[i].style.webkitFilter = "none";
            }
        }
        // return to normal
        else {
            switchMode.classList.remove('light');
            style.setProperty('--material-color', '');
            style.setProperty('--background-color', '');
            style.setProperty('--border-color', '');
            style.setProperty('--font-color', '');
            style.setProperty('--shadow-color', '');
            style.setProperty('--input-color', '');
    
            for (var i = 0; i < imageWorks.length; i++) {
                imageWorks[i].style.webkitFilter = "";
            }
        } 
    });
});

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
        let largeur = document.documentElement.clientWidth
        // Calcul de la largeur de la barre
        let barre = position / hauteur * largeur
        // Modification du CSS de la barre
        document.getElementById("progress").style.width = barre+"px"
    });
};