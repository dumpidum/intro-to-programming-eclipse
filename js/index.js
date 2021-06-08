//adding copyright text in the footer
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = '&copy; Ignat Babenko, ' + thisYear;
footer.appendChild(copyright);
//adding 'Skills' section
let skills = ['JavaScript', 'HTML', 'CSS'];
let skillsSection = document.getElementById('skills');
let skillList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillList.appendChild(skill);
}