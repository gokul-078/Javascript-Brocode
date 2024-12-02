
// Easy way by window prompt:
let username1 = window.prompt("What's your name?");
console.log(username1);

// By html textbox:
let output1;
function clicked()
{
    let username = document.getElementById("username");
    output1 = username.value;
    console.log(output1);
}
// By html textbox Otherway:
let output2;
document.getElementById("button1").onclick = function(){
    output2 = document.getElementById("username2").value;
    console.log(output2);
}

