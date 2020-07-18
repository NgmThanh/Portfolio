/* ============ SCRIPT SKILLS ============ */

// html collection of class "skill-bar"
var classSkills = document.getElementsByClassName('skill-bar');
var skills = new Array();

// array id of skills 
for(var i = 0; i < classSkills.length; i++){
    skills.push(classSkills[i].id);
}

// set width in skill bars
skills.forEach(language => {
    var skill = document.getElementById(language);
    skill.style.width = skill.childNodes[0].textContent;
});