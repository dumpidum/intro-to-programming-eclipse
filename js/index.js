// adding copyright text in the footer
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `&copy; Ignat Babenko, ` + thisYear;
copyright.style.padding = '10px';
copyright.style.marginLeft = 'auto';
let contacts = document.createElement('span');
footer.appendChild(copyright);


// adding 'Skills' section
let skills = ['JavaScript', 'HTML', 'CSS'];
let skillsSection = document.getElementById('skills');
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('p');
    skill.textContent = skills[i];
    skill.className = 'skill';
    skillsSection.appendChild(skill);
}


// 'Message' form handler
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
    
    // declaring 'edit' button
    let editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';
    editButton.id = 'editButton';

    // declaring 'remove' button
    let removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.id = 'removeButton';

    // adding the buttons and a message
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    document.getElementById('messages').style.display = 'inline';
    event.target.reset();
})


// 'Messages' buttons handler
messageList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        let li = event.target.parentNode;
        if (event.target.textContent === 'remove') {
            messageList.removeChild(li);
            if (messageList.childElementCount === 0) {
                document.getElementById('messages').style.display = 'none';
            }
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


// var githubRequest = new XMLHttpRequest();
// githubRequest.open('GET', 'https://api.github.com/users/dumpidum/repos');
// githubRequest.send();
// githubRequest.addEventListener('load', () => {
//     let repositories = JSON.parse(githubRequest.response);
//     let projectSection = document.getElementById('projects');
    
//     for (let i = 0; i < repositories.length; i++) {
//         let project = document.createElement('p');
//         project.className='project';
//         project.innerHTML=`<a href='${repositories[i].html_url}' target='_blank'>${repositories[i].name}</a> created at ${repositories[i].created_at.slice(0,10)}`;
//         projectSection.appendChild(project);
//     }
    
// })


// fetching repos from GitHub and creating a list
fetch('https://api.github.com/users/dumpidum/repos')
    .then(response => {
        if (!response.ok) {
            console.log (response);
            throw new Error ('A network error occured');
        } else {
            return response.json();
        }
    })
    .then(data => {
            let projectSection = document.getElementById('projects');            
            for (let i = 0; i < data.length; i++) {
                let project = document.createElement('p');
                project.className='card';
                project.innerHTML=`<a href='${data[i].html_url}' target='_blank'>${data[i].name}</a> created on ${data[i].created_at.slice(0,10)}`;
                projectSection.appendChild(project);
            }
    })
    .catch(error => {
        let projectSection = document.getElementById('projects');
        let project = document.createElement('p');
        project.innerText = 'Could not fetch data';
        projectSection.appendChild(project);
    })


// 'Back to top' button handler
var mybutton = document.getElementById("topButton");

// when the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// when the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}