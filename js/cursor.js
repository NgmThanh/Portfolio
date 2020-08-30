/* ============ DIV FOLLOW CURSOR ============ */

var cursor = document.querySelector('.cursor');
var innerCursor = document.querySelector('.cursor--inner');

document.addEventListener('mousemove', function(c) {
    var x = c.clientX;
    var y = c.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    innerCursor.style.left = x + "px";
    innerCursor.style.top = y + "px";
});

/* ============ CURSOR ANIMATION ON HOVER LINKS ============ */

var hoverLinks = [];

// elements to animate cursor hover
var href = document.getElementsByTagName("a");
var hamburger = document.querySelector('.hamburger-icon');
var workBoxes = document.querySelectorAll('.timeline__box');
var send = document.querySelector('.submit');

for (var i=0; i < href.length; i++) {
    hoverLinks.push(href[i]);
}

hoverLinks.push(hamburger);
hoverLinks.push(send);

workBoxes.forEach(box => {
    hoverLinks.push(box);
})

for (var i = 0; i < hoverLinks.length; i++) {

    hoverLinks[i].addEventListener("mouseover", () => {
        cursor.classList.toggle("cursor-focus")
    });
    hoverLinks[i].addEventListener("mouseout", () => {
        cursor.classList.toggle("cursor-focus")
    });

}