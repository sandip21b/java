// let age = 17;
// if(age >=18){
//     console.log("you are eligible to drive");
// }else{
//     console.log("you are not ready yet");
// }
//  let age = 25;
//  let haslicense =true;
//  if(age >= 16){
//     console.log("you are old enought to drive");

//     if(haslicense){
//         console.log("you have your license");
//     }else{
//         console.log("you do not have your license");
//     }
//  } else{
//     console.log("you are under age");
//  }
const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const result = document.getElementById("result");
let age;
mysubmit.onclick = function () {
     age = mytext.value;
     age = Number(age);
 if( age>=100){
   
    result.textContent = `you are not dead yet!!`;
}
else if(age>=18){
   result.textContent =`you can enter in this site`;
} else if(age=1){
   result.textContent = `your just born yet`;
} 

else{
    result.textContent=`you are not ready to enter this webiste`;
}
}
