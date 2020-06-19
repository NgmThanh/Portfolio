
// Get the modal
// var modal = document.getElementById("myModal");

var number = 0;
// set event listener in all menu buttons
document.querySelectorAll('.timeline__box').forEach(btnWork => {
    
    btnWork.addEventListener('click', () => {
        console.log(btnWork.id)
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
        // get modal
        var modal = document.getElementById("myModal" + number);
        // get workpage
        var workPage = document.getElementsByClassName("work-window")[number-1];
        // Get the button that opens the modal
        var btn = document.getElementById("btnWork" + number);

        // Get the <span> element that closes the modal
        // var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        modal.style.display = "block";

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                disableScroll();
            }
        }
        console.log(number)

        var slides = document.getElementsByClassName("slide"+ number);
        
        if (slides.length > 0) {
            showSlides(1, number-1);
        }
    }); 
});

// slides gestion
var slideIndex = 1;

// switch slides
function plusSlides(n) {
    showSlides(slideIndex += n, number)
}

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
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// disable scroll when modal window is opened
function disableScroll() {
    document.body.classList.toggle("disable-scroll");
}