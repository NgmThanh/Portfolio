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
var explore = document.querySelector('.explore');
var hamburger = document.querySelector('#hamburger');
var barsHamburger = document.querySelectorAll('#hamburger > div');
var scrollLine = document.querySelector('.scroll--line');
var scrollLabel = document.querySelector('.scroll--label');

var parameters = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
}

var callback = function(entries, observer) { 
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            // dark pages
            if (entry.target.id == "about" || entry.target.id == "works" || entry.target.id == "menu") {
                explore.classList.remove("font-dark");
                scrollLabel.classList.remove("font-dark");
                scrollLine.classList.remove("component-dark");
                hamburger.classList.remove("component-dark");
                barsHamburger.forEach(bar => {
                    bar.classList.remove("component-light");
                });
            }
            // light pages
            else {
                explore.classList.add("font-dark");
                scrollLabel.classList.add("font-dark");
                scrollLine.classList.add("component-dark");
                hamburger.classList.add("component-dark");
                barsHamburger.forEach(bar => {
                    bar.classList.add("component-light");
                });
            }
        }
    });
};

var pageObserver = new IntersectionObserver(callback, parameters);

document.querySelectorAll('#about, #skills, #works, #contact, #menu').forEach(page => {
    pageObserver.observe(page);
});
