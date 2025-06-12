let x = 3.99;
let y = 2;
let z = 1;
//  z = Math.round(x);
//  z =Math.floor(x);
//   z= Math.ceil(x);
    // let max = Math.max(x,y,z);
    // console.log(max);
// console.log(z);

//random number
//  const min =50;
//  const max = 100;
//  let randomnumber = Math.floor(Math.random() *(max-min )) + min;
//   console.log(randomnumber);

const mybtn = document.getElementById("mybtn");
const mylabel1 =document.getElementById("mylabel1");
const mylabel2 = document.getElementById("mylabel2"); 
const mylabel3 = document.getElementById("mylabel3");

    const min =1;
    const max =6;
    let randomnum1;
     let randomnum2;
      let randomnum3;
mybtn.onclick = function(){
    randomnum1 = Math.floor( Math.random() *max )+min;
       randomnum2 = Math.floor( Math.random() *max )+min;
    randomnum3 = Math.floor( Math.random() *max )+min;
   
    mylabel1.textContent= randomnum1;
        mylabel2.textContent= randomnum2;
            mylabel3.textContent= randomnum3;


}