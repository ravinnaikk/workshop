$(document).ready(function(){
    $(".login").click(function(){
        var Username = $("#loginusername").val();
        var Password = $("#loginpassword").val();
    
        fetch('../json/loginData.json').then(response => {
            return response.json();
          }).then(data => {
              console.log(data);
            if( Username != "" && Password != "" ){
             for (let key in data) {
                let value = data[key];
                if(Username==value.username && Password==value.password){
                    window.location = "../html/registeration.html";
                }else{
                    msg = "Invalid username and password!";
                }
                $("#second").html(msg);
            }
            }
          }).catch(err => {
              console.log(err);
          });
 
    });
         });