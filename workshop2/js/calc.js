function dis(val){
    document.getElementById("result").value+=val;
}

function solve(){
    let x= document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
}
function clr(){
    document.getElementById("result").value="";
}

function backspace(){
    var value=document.getElementById("result").value;
    document.getElementById("result").value=value.substr(0, value.length-1);
}

function square(){
var value=document.getElementById("result").value;
document.getElementById("result").value=value*value;

}

function squareroot(){
    var value=document.getElementById("result").value;
    document.getElementById("result").value=Math.sqrt(value);

}

function cube(){
    var value=document.getElementById("result").value;
    document.getElementById("result").value=value*value*value;
}

function red(){
    location.href="../html/scalc.html";
}

function red1(){
    location.href="../html/calc.html"
}
