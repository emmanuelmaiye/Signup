const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
container.classList.toggle("change");
});



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

