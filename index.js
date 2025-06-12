/*console.log(`hello`);
window.alert(`this is an alert`);
window.alert(`hello`);

document.getElementById("myH1").textContent = 'Hello';
document.getElementById("myP").textContent = 'I like pizza';
// variable
//let age= 19;
let price = 1500;
console.log(age);
console.log(price);
console.log(`you are ${age}`);
console.log(`the price is ${price}`);

let firstname = "sandip";
console.log(typeof firstname);
console.log(firstname);
console.log(`your name is ${firstname}`);

let gmail="sandip@gmail";
console.log(`your gmail is ${gmail}`);

// booleans

let online = false;
console.log(`sandip is online ${online}`);
let forsale = true;
console.log(`is this car is for sale ${forsale}`);
*/
/*
let fullName = "sandip";
let age = 20;
let student = true;
document.getElementById("p1").textContent = `your name is ${fullName}`;
document.getElementById("p2").textContent = `you are ${age} years old`;
document.getElementById("p3").textContent = `are you a student  ${student}`;

// arthemetic operator
 let students = 20;
// students = students+1; [addition]
 // students = students-1;[substraction]
 //students = students*1; [multiply]
 //students = students/1;[divide]
 //students = students**2 //[square]
students += 1;
students %=2;

 console.log(students);
 */

 //accept user input
 
 //let username;
 //username = window.prompt("what is your username");
 //console.log(username);

 /*

 let username;
 document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("myH1").textContent = `helllo ${username}`
}
    */
 //   type conversiotion

 /*
   let age = window.prompt("how old are you?");
    age = Number(age);
    age+= 1;
    console.log(age);

    let x ="0";
      let y ="0";
        let z ="0";
        x =Number(x);
        y = String(y);
        z = Boolean(z);

        console.log(x,typeof x);
        console.log(y, typeof y);
        console.log(z,typeof z);
        */ 
       // constants 
   const PI = 3.14159;
    let radius;
    let circumference;
   // radius = window.prompt("enter the  radius of a circle");
    // radius = Number(radius);

 //   circumference = 2 * pi  * radius;

  //  console.log(circumference);
    
   document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
 document.getElementById("myH3").textContent = circumference + "cm";
   }

 