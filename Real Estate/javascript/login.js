 function validate() {
        var name = document.getElementById('username').value;
        var password = document.getElementById('pw').value;

        var user = "<input type='text' placeholder='Username / Email*' id='username' style='border-radius: 10px;height: 60px;width: 100%;border: 1px solid red;'>";

        var pas = "<input type='password' placeholder='Password*' id='pw' style='border-radius: 10px;height: 60px;width: 100%;border: 1px solid red;'>";

        var flag = true;

        if(name=="pascalnobi" && password=="123"){
            window.open("INDEX.html")
            return true;

        }


        if (name.length < 1) {
            
            document.getElementById('mylocation').innerHTML="<p align='center' style='color: red;'>Email is required***</p>"
            document.getElementById('username').outerHTML = user;
            flag = false;
        }
        

        if (password.length < 1) {
        	document.getElementById('mylocation2').innerHTML="<p align='center' style='color: red;'>password is required***</p>"
            document.getElementById('pw').outerHTML = pas;
            flag = false;
        }
         

        return flag;
        }	

function visible() {
    var passwordInput = document.getElementById("pw");
    var eyeIcon = document.querySelector(".pwicon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}




        
// script.js

