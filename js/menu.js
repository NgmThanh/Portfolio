// ============ SCRIPT MENU ============ //

// get elems on click
var about = document.getElementById("about-menu");
var skills = document.getElementById("skills-menu");
var works = document.getElementById("works-menu");
var contact = document.getElementById("contact-menu");

// get sections of page
var aboutPage = document.getElementById('about');
var skillsPage = document.getElementById('skills');
var worksPage = document.getElementById('works');
var contactPage = document.getElementById('contact');

// events 
about.addEventListener('click', () => {

    about.style.color = "#FF5711";
    skills.style.color = "whitesmoke";
    works.style.color = "whitesmoke";
    contact.style.color = "whitesmoke";

    // aboutPage.style.display = "block";
    // skillsPage.style.display = "none";
    // worksPage.style.display = "none";
    // contactPage.style.display = "none";

});

skills.addEventListener('click', () => {

    about.style.color = "whitesmoke";
    skills.style.color = "#FF5711";
    works.style.color = "whitesmoke";
    contact.style.color = "whitesmoke";

    // aboutPage.style.display = "none";
    // skillsPage.style.display = "block";
    // worksPage.style.display = "none";
    // contactPage.style.display = "none";

});

works.addEventListener('click', () => {

    about.style.color = "whitesmoke";
    skills.style.color = "whitesmoke";
    works.style.color = "#FF5711";
    contact.style.color = "whitesmoke";

    // aboutPage.style.display = "none";
    // skillsPage.style.display = "none";
    // worksPage.style.display = "block";
    // contactPage.style.display = "none";
});

contact.addEventListener('click', () => {

    about.style.color = "whitesmoke";
    skills.style.color = "whitesmoke";
    works.style.color = "whitesmoke";
    contact.style.color = "#FF5711";

    // aboutPage.style.display = "none";
    // skillsPage.style.display = "none";
    // worksPage.style.display = "none";
    // contactPage.style.display = "block";

});