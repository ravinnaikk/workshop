$(document).ready(function(){
    $(".Register").click(function(){
    
    $.ajax({
        'url':'http://127.0.0.1:5500/json/registerData.json',
        'method':'POST',
        'dataType': 'json',
         processData: false,
        'contentType': 'application/json',
        'data':JSON.stringify({
            "firstname": $('#firstname').val(),
            "lastname": $('#lastname').val(), 
            "address": $('#address').val(),
            "city": $('#city').val(),
            "pin": $('#pin').val() 
            }),
        });
    });
});