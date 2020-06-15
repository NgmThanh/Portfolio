// ============ SCRIPT MENU ============ //

var skills = ['c', 'html', 'java', 'php', 'js', 'sql', 'python', 'ocaml'];
var score =  [80, 80, 70, 80, 50, 70, 60, 50];

var i = 0;

// set percentage of skill in skill bar
score.forEach(percent => {
    var skill = document.getElementById(skills[i]);
    skill.style.width = percent+'%';
    i++;
    // console.log(skill,  i);
});

