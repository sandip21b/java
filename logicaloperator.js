const temp = 40;
if(temp >0 && temp<=30){
console.log("the weather is good");
}
else if (temp <=0 || temp <=30){
    console.log("the temperature is mid");
}
else{
    console.log("the weather is bad");
}
// not operator 
const issunny = true;
if(!issunny){
    console.log("it is cloudy");
}else{
    console.log("it is sunny");
}