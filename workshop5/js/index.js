$(document).ready(()=>{
    $('button').click(function(){
        var value=document.getElementById('search').val;
        console.log(value);
        if(value=='tomato'){
            window.location.href =document.querySelector('tomato');
        }
        if(value=='carrot'){
            window.location.href =document.querySelector('carrot');
        }  if(value=='cucumber'){
            window.location.href =document.querySelector('cucumber');
        }
        else{
            document.querySelector('dan').innerHTML='oops try again';
        }
    })
})