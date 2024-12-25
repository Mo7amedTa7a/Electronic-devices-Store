let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signIn = document.querySelector("#sign-in");
let message = document.querySelector("#message");
let message2 = document.querySelector("#message2");

signIn.addEventListener("click", function (R) {
  R.preventDefault();
  if (email.value == "" && password.value == "") {
    message.style.display = "block";
    message2.style.display = "block";
    }else if(email.value == ""){
        message.style.display = "block";
        message2.style.display = "none";
    }else if(password.value == ""){
        message.style.display = "none";
        message2.style.display = "block";
        
    }else{
        setInterval(() => {
            window.location.href = "index.html";
        }, 1000);
    }
});