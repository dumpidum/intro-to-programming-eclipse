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
// lesson 4-3
let messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = event.target.name;
    let email = event.target.email;
    let message = event.target.message;
    console.log(name, email, message);
    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email.value}">${name.value}</a> wrote: <span>${message.value} </span>`;
    
    let removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', (event) => {
        let entry = event.target.parentNode;
        let list = message.parentNode;

        if (list.childNodes.length <= 1) {
            messageSection.style.display = 'none';
        }

        entry.remove();
    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
})