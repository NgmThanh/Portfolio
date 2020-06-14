// ============ SCRIPT MENU ============ //

// get elems on click
var about = document.getElementById("about-menu");
var works = document.getElementById("works-menu");
var contact = document.getElementById("contact-menu");

// get sections of page
var aboutPage = document.getElementById('about');
var worksPage = document.getElementById('works');
var contactPage = document.getElementById('contact');

// events 
about.addEventListener('click', () => {

    aboutPage.style.display = "block";
    worksPage.style.display = "none";
    contactPage.style.display = "none";

});

works.addEventListener('click', () => {

    aboutPage.style.display = "none";
    worksPage.style.display = "block";
    contactPage.style.display = "none";
});

contact.addEventListener('click', () => {

    aboutPage.style.display = "none";
    worksPage.style.display = "none";
    contactPage.style.display = "block";

});