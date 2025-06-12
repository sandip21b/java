const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn =document.getElementById("increaseBtn"); 
const counting = document.getElementById("counting");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    counting.textContent = count;
}
decreaseBtn.onclick =function(){
    count--;
    counting.textContent =count;
}
resetBtn.onclick = function(){
    count=0;
    counting.textContent = count; 
}