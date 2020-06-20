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

// light mode
function lightMode() {
    // toggle class light mode to body
    var element = document.body;
    element.classList.toggle("light-mode");

    // to test if light is enabled or not
    var lightEnabled = document.getElementsByClassName("light-mode");

    // change icons
    var iconParent = document.getElementsByClassName("presentation")[0];
    var icon = iconParent.getElementsByTagName("img");

    // change icon of button light mode
    var iconLightMode = document.getElementsByClassName("dark-menu");

    // if light is enabled
    if (lightEnabled.length === 0) {
        // change button of dark mode menu
        for (var i = 0; i < iconLightMode.length; i++) {
            iconLightMode[i].textContent = "☀️";
        }
        // change filter of icons contact
        for (var i = 0; i < icon.length; i++) {
            icon[i].style.filter = "";
        }
    }
    // if dark is enabled
    else {
        for (var i = 0; i < iconLightMode.length; i++) {
            iconLightMode[i].textContent = "🌙";
        }
        for (var i = 0; i < icon.length; i++) {
            icon[i].style.filter = "none";
        }
    }  
}

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