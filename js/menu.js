// ============ SCRIPT MENU ============ //

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