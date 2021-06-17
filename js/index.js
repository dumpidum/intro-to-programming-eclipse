//adding copyright text in the footer
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `&copy; Ignat Babenko, ` + thisYear;
let contacts = document.createElement('span');
footer.appendChild(copyright);
footer.style.width = '100%';

//adding 'Skills' section
let skills = ['JavaScript', 'HTML', 'CSS'];
let skillsSection = document.getElementById('skills');
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('span');
    skill.textContent = skills[i];
    skill.className = 'skill';
    skillsSection.appendChild(skill);
}

// lesson 4-3
let messageSection = document.getElementById('messages');
let messageList = messageSection.querySelector('ul');

const messageForm = document.getElementById('leave_message');
messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = event.target.name;
    let email = event.target.email;
    let message = event.target.message;

    
    let newMessage = document.createElement('li');
    newMessage.classList.add('message');
    newMessage.innerHTML = `<a href="mailto:${email.value}">${name.value}</a> wrote: <span>${message.value} </span><br>`;
    
    //declaring 'edit' button
    let editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';
    editButton.id = 'editButton';

    //declaring 'remove' button
    let removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.id = 'removeButton';

    //adding the buttons and a message
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
})


     
        // if (list.childNodes.length <= 1) {
        // messageSection.style.display = 'none';

    //buttons handler
messageList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        let li = event.target.parentNode;
        if (event.target.textContent === 'remove') {
            messageList.removeChild(li);
        } else if (event.target.textContent === 'edit') {
            let span = li.querySelector('span');
            let input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            event.target.textContent = 'save';
        } else if (event.target.textContent === 'save') {
            let input = li.querySelector('input');
            let span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            event.target.textContent = 'edit';
        }
    }
})


//     removeButton.addEventListener('click', (event) => {
//     let entry = event.target.parentNode;
//     let list = message.parentNode;

//     // if (list.childNodes.length <= 1) {
//     //     messageSection.style.display = 'none';
//     // }

//     entry.remove();