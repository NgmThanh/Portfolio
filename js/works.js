
// Get the modal
// var modal = document.getElementById("myModal");


// set event listener in all menu buttons
document.querySelectorAll('.timeline__box').forEach(btnWork => {
    
    btnWork.addEventListener('click', () => {
        console.log(btnWork.id)
        var btnClicked = btnWork.id;
        var number = 0;

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

        var modal = document.getElementById("myModal" + number);
        var workPage = document.getElementsByClassName("work-window")[number-1];
        var btn = document.getElementById("btnWork" + number);

        // Get the button that opens the modal

        // Get the <span> element that closes the modal
        // var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        modal.style.display = "block";

        // workPage.onclick = function() {
        //     modal.style.display = "none";
        // }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }


    }); 
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
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

