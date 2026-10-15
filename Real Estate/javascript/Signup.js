 function signup() {
        var name = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('pw').value;
        var password2 = document.getElementById('pw2').value;

        var fullname = "<input type='text' placeholder='Fullname*' id='username' style='border-radius: 10px;height: 60px;width: 100%;border: 1px solid red;'>";
        var user = "<input type='text' placeholder='Username / Email*' id='username' style='border-radius: 10px;height: 60px;width: 100%;border: 1px solid red;'>";

        var pas = "<input type='password' placeholder='Password*' id='pw' style='border-radius: 10px;height: 60px;width: 100%;border: 1px solid red;'>";
        var pas2 = "<input type='password' placeholder='Retype-password*' id='pw2' style='border-radius: 10px;height: 60px;width: 100%;border: 1px solid red;'>";

        var flag = true;

        if(name.length!=0 && email.length!=0 && password.length!=0 && password2==password){
            window.open("INDEX.html");
        }
       
        if (name.length < 1) {
            
            document.getElementById('mylocation').innerHTML="<p align='center' style='color: red;'>Name is required***</p>"
            document.getElementById('username').outerHTML = fullname;
            flag = false;
        }
        

        if (password.length < 1) {
            document.getElementById('mylocation3').innerHTML="<p align='center' style='color: red;'>password is required***</p>"
            document.getElementById('mylocation4').innerHTML="<p align='center' style='color: red;'>password is required***</p>"

            document.getElementById('pw').outerHTML = pas;
            document.getElementById('pw2').outerHTML = pas2;
            flag = false;
        }
        if (email.length < 1) {
            document.getElementById('mylocation2').innerHTML="<p align='center' style='color: red;'>Email is required***</p>"
            document.getElementById('email').outerHTML = user;
            flag = false;
        }
        if (password!=password2){
            document.getElementById('mylocation4').innerHTML="<p align='center' style='color: red;'>Must be same password***</p>"
            document.getElementById('pw2').outerHTML = pas2;
        }
        return flag;


        	
        }






        
// script.js

