const container = document.querySelector(".container");
const signUpBtn = document.querySelector("#sign-up-button");
var allForms = document.querySelectorAll('all-form')
var signInBtn = document.querySelector('#sign-in-button');
var signInForm = document.querySelector('#sign-in-form');
var signUpForm = document.querySelector('#sign-up-form');

signUpBtn.addEventListener("click", () => {
    container.classList.toggle("change");
    signUpBtn.style.display = 'none'
    signInBtn.style.display = 'block'
    signInForm.style.display = 'none'
});


signInBtn.addEventListener("click", () => {
    // allForms.classList.toggle('signup-form')
    signUpForm.style.display = 'none'
    signInForm.style.display = 'block'
    signUpBtn.style.display = 'block'
    signInBtn.style.display = 'none'
});







// const btn = document.getElementById('button');

// //Change button text on click
// btn.addEventListener('click', function handleClick() {
// btn.textContent = 'Sign In';
// });

// var btn = document.querySelector('button');
// btn.addEventListener('click',method2);
// function method2(){
// btn.textContent = 'Sign In' g;
// }


// btn.addEventListener('click',method1);
// function method1(){
// btn.innerText = 'Sign Up';
// }


// comfirm password function
function validate() {
    var password = document.getElementById("pwd").value;
    var confirmPassword = document.getElementById("conpwd").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
//end

//other gendet hidden textbox
function ShowHideDiv() {
    var chkdOthers = document.getElementById("chkdOthers");
    var txtothers = document.getElementById("others");
    txtothers.style.display = chkdOthers.checked ? "block" : "none";
}
//end

//Age restriction trigger
var ageEl = document.getElementById('age');

manageBtn(ageEl);

ageEl.addEventListener('input', function(){manageBtn(ageEl);});

function manageBtn(ageEl){
var age = ageEl.value;
if(age < 18){
    document.getElementById('age').style.borderColor='#e52213';
    document.getElementById("Btn").disabled = true;
}
else{
    document.getElementById('age').style.borderColor='';
    document.getElementById("Btn").disabled = false;
}
}
//end

const input = document.getElementById("fname"); 
const textarea = document.getElementById("get"); 

input.addEventListener("input", (e) => { 
    textarea.innerText = input.value; 
})

