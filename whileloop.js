// let username="";
// while(username === "" || username===null ){
//     username = window.prompt(`enter your name`);
    
// }
//     console.log(`hello${username}`);

//     let username;
// do{   username = window.prompt(`enter your name`);}
//     while(username === "" || username===null )
//     console.log(`hello${username}`);

    // let loggedin = false;
    // let email;
    // let password;
    // while(!loggedin){
    //     email = window.prompt(`enter your email`);
    //     password = window.prompt(`enter your password`);
    //     if(email === "sandip@gmail.com"&& password === "pass123"){
    //         loggedin = true;
    //         console.log("you are logged in");
    //     }else {
    //         console.log("invalid form ! please try again")
    //     }
    // }

     let loggedin = true;
    let email;
    let password;
   do{
        email = window.prompt(`enter your email`);
        password = window.prompt(`enter your password`);
        if(email === "sandip@gmail.com"&& password === "pass123"){
            loggedin = true;
            console.log("you are logged in");
        }else {
            console.log("invalid form ! please try again")
        }
    } while(!loggedin)