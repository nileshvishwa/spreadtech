const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const cpass = document.getElementById("cpass")

const btn = document.getElementById("btn_submit");

btn.addEventListener("click", ()=>{

fname.value = fname.value.trim()
lname.value = lname.value.trim()
email.value = email.value.trim()
pass.value = pass.value.trim()
cpass.value = fname.value.trim()

if(!fname)
    return alert("Please fill first name!");

if(!lname)
    return alert("Please fill last name!")

if(!email)
    return alert("Please enter email id!")

if(pass.value != cpass.value)
    return alert("Password and Confirm Password do not match");


});