function alertMe() {
    const name = document.getElementById('name').value;
    if (name) {
        alert(`Hi ${name}!`);
    }
}

let isPalegreen = true;
function changeColor() {
    if (isPalegreen) {
        document.body.style.backgroundColor = 'palegreen';
    } else {
        document.body.style.backgroundColor = 'cyan';
    }
    isPalegreen = !isPalegreen;  
}

function validateText() {
    const textInput = document.getElementById('textInput').value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(textInput)) {
        alert('SP CHARACTERS NOT ALLOWED');
    } else {
        alert('Your text is good!');
    }
}

function addText() {
    const heading = document.getElementById('main-heading');
    heading.textContent += " Add Text";
}
