import {auth, createUserWithEmailAndPassword } from "./firebase.js";

let signup = () =>{

 let email = document.getElementById("email");
 let password = document.getElementById("password");
    createUserWithEmailAndPassword(auth,email.value,password.value)
    .then((res) => { 
    console.log("user",res.user);
    })
    .catch((error) => {
      console.log("error",error.message);
      
    });
};

let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click",signup);






