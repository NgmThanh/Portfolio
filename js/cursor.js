/* ============ DIV FOLLOW CURSOR ============ */

var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(c) {
    var x = c.clientX;
    var y = c.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

