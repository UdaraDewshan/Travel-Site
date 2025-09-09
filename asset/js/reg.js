let fullName=document.getElementById("fullName");
let email=document.getElementById("email");
let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirmPassword");
let phone=document.getElementById("phone");

function validateForm(){
    if(fullName.value.trim()===""){
        alert("Full Name is required");
        fullName.focus();
        return false;

    }
    if(email.value.trim()===""){
        alert("Email is required");
        email.focus();
        return false;
    }
    if(password.value.trim()===""){
        alert("Password is required");
        password.focus();
        return false;
    }
    if(confirmPassword.value.trim()===""){
        alert("Confirm Password is required");
        confirmPassword.focus();
        return false;
    }
    if(password.value!==confirmPassword.value){
        alert("Passwords do not match");
        confirmPassword.focus();
        return false;
    }
    if(phone.value.trim()===""){
        alert("Phone Number is required");
        phone.focus();
        return false;
    }
    if(!/^\d{10}$/.test(phone.value)){
        alert("Phone Number must be 10 digits");
        phone.focus();
        return false;
    }
    localStorage.setItem("userEmail", email.value);
    localStorage.setItem("userPassword", password.value);
    alert("Registration Successful");
    return true;
}
AOS.init({ duration: 1000, once: true });

validateForm();