/* ============ APPARITION ON SCROLL ============ */

const ratio = 0.1;

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.remove('reveal');
        } else {
            entry.target.classList.add('reveal');
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r);
})

/* ============ CHANGE COLORS ON SCROLL ============ */

// elements to change
var explore = document.querySelector('#explore');
var hamburger = document.querySelector('#hamburger');
var barsHamburger = document.querySelectorAll('#hamburger > div');
var scrollLine = document.querySelector('.scroll--line');
var scrollLabel = document.querySelector('.scroll--label');

// colors
var colorLight = "color: var(--background-light); transition: 0.5s ease-out;";
var colorDark = "color: var(--background-dark); transition: 0.5s ease-out;";
var backgroundLight = "background-color: var(--background-light); transition: 0.5s ease-out;";
var backgroundDark = "background-color: var(--background-dark); transition: 0.5s ease-out;"

var parameters = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

var callback = function(entries, observer) { 
    entries.forEach(entry => {
        // console.log(entry.target.className)

        if (entry.isIntersecting) {

            if (entry.target.id == "about" || entry.target.id == "works" || entry.target.id == "menu") {
                explore.setAttribute("style", colorLight);
                scrollLabel.setAttribute("style", colorLight);
                scrollLine.setAttribute("style", backgroundLight)
                hamburger.setAttribute("style", backgroundLight);
                barsHamburger.forEach(bar => {
                    bar.setAttribute("style", backgroundDark);
                });
            } else {
                explore.setAttribute("style", colorDark);
                scrollLabel.setAttribute("style", colorDark);
                scrollLine.setAttribute("style", backgroundDark)
                hamburger.setAttribute("style", backgroundDark);
                barsHamburger.forEach(bar => {
                    bar.setAttribute("style", backgroundLight);
                });
            }
        }
    });
};

var pageObserver = new IntersectionObserver(callback, parameters);

document.querySelectorAll('#about, #skills, #works, #contact, #menu').forEach(page => {
    pageObserver.observe(page);
});