

const checkbox1 = document.getElementById("subscribe");
const visa1 = document.getElementById("visa");
const mastercard1 = document.getElementById("mastercard");
const paypal1 = document.getElementById("paypal");
const btnsubmit = document.getElementById("btn");
const subresult = document.getElementById("subresult");
const payresult = document.getElementById("payresult");

btnsubmit.onclick = function()
{
    if(checkbox1.checked){
        subresult.textContent = "You're Subscribed!";
    }
    else{
        subresult.textContent = "You're not Subscribed!";
    }

    if(visa1.checked){
        payresult.textContent = "You're using visa!";
    }
    else if(mastercard1.checked){
        payresult.textContent = "You're using mastercard!";
    }
    else if(paypal1.checked){
        payresult.textContent = "You're using paypal!";
    }
    else{
        payresult.textContent = "You're not selected any of the above payment!";
    }
}