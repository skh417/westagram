const inputId = document.getElementById('input-id');
const inputPassword = document.getElementById('input-password');
const loginButton = document.getElementsByClassName('login-button')[0];
const facebookLogin = document.getElementsByClassName('fbbutton')[0];

for(let i = 0; i < 2; i++){
const inputInfo = document.getElementsByClassName('inputbox');
inputInfo[i].addEventListener('keyup', changeColor);
}

function changeColor(){
    let idLength = inputId.value.length;
    let pwLength = inputPassword.value.length;
    if(idLength >= 1 && pwLength >= 1){
        loginButton.style.opacity = '1.0';
        loginButton.style.cursor = 'pointer';
        loginButton.disabled = false;
    } else if (idLength == 0 || pwLength == 0){
        loginButton.style.opacity = '0.4';
        loginButton.disabled = 'disabled';
        loginButton.style.cursor = 'default';
    }
  
}

loginButton.addEventListener('mousedown', changeOp1);
function changeOp1(){
    loginButton.style.opacity = '0.6';
}

loginButton.addEventListener('mouseup', changeOp2)
function changeOp2(){
        this.style.opacity = '1.0';
}

facebookLogin.addEventListener('mousedown', clickEvent1);
function clickEvent1(){
    this.style.opacity = '0.6';
}

facebookLogin.addEventListener('mouseup', clickEvent2)
function clickEvent2(){
    this.style.opacity ='1.0';
}

const signUpLink = document.querySelector('.signup');

signUpLink.addEventListener('mousedown', signClickEvent1);
function signClickEvent1(){
    this.style.opacity = '0.6';
}

signUpLink.addEventListener('mouseup', signClickEvent2);
function signClickEvent2(){
    this.style.opacity = '1.0';
};

const findPw = document.querySelector('.findpw a');
findPw.addEventListener('mousedown', findpwClick1);
function findpwClick1(){
    this.style.opacity = '0.6';
}
findPw.addEventListener('mouseup', findpwClick2);
function findpwClick2(){
    this.style.opacity = '1.0';
}

let appleButton = document.querySelector('#apple-download');
const downloadButton2 = document.getElementById('google-download');

appleButton.addEventListener('mousedown', downloadClick1);
function downloadClick1(){
    this.style.opacity = '0.6';
}

appleButton.addEventListener('mouseup', downloadClick2);
function downloadClick2(){
    this.style.opacity = '1.0';
}

downloadButton2.addEventListener('mousedown', downloadClick3);
function downloadClick3(){
    this.style.opacity = '0.6';
}

downloadButton2.addEventListener('mouseup', downloadClick4);
function downloadClick4(){
    this.style.opacity = '1.0';
}


