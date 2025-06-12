const mycheckbox = document.getElementById("mycheckbox");
const khalti = document.getElementById("khalti");
const bank = document.getElementById("bank");
const phonepay = document.getElementById("phonepay");
const mysubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subResult");
const paymentresult = document.getElementById("paymentresult");


mysubmit.onclick = function(){

    if(khalti.checked){
        paymentresult.textContent = `you are paying with khalti `;

    } else if (bank.checked){
        paymentresult.textContent = `you are paying with bank`;
    }else if (phonepay.checked) {
        paymentresult.textContent =`you are paying with phonepay`;
    }
}