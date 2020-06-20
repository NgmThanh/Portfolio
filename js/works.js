/* ============ WORKS SECTION ============ */

var number = 0;
var slideIndex = 1;

/* ----- WORKS BUTTONS ----- */

// set event listener in all menu buttons
document.querySelectorAll('.timeline__box').forEach(btnWork => {
    btnWork.addEventListener('click', () => {
        var btnClicked = btnWork.id;
        
        switch (btnClicked) {
            case "btnWork1" : 
                number = 1
                break;
            case "btnWork2" : 
                number = 2
                break;
            case "btnWork3" : 
                number = 3
                break;
            case "btnWork4" : 
                number = 4
                break;
            case "btnWork5" : 
                number = 5
                break;
            case "btnWork6" : 
                number = 6
                break;
        }

        disableScroll(); 
        // get modal page
        var modal = document.getElementById("myModal" + number);

        // When the user clicks the button, open the modal 
        modal.style.display = "block";

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                // enable scroll again
                disableScroll();
            }
        }

        slideIndex = 1;

        // display slideshow (if exists)
        var slides = document.getElementsByClassName("slide"+ number);

        if (slides.length > 0) {
            showSlides(slideIndex, number-1);
        }
    }); 
});

/* ----- SLIDESHOW GESTION ----- */

// switch slides
function plusSlides(n) {
    showSlides(slideIndex += n, number)
}

// switch slide onclick on dots
function currentSlide(n) {
    showSlides(slideIndex = n, number)
}

// show slides 
function showSlides(n, no) {
    var slides = document.getElementsByClassName("slide"+ number);
    var dots = document.getElementsByClassName("dot" + number);

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// disable scroll when modal window is opened
function disableScroll() {
    document.body.classList.toggle("disable-scroll");
}