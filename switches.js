// let day = 7;
// if(day ==1){
//     console.log(`it is sunday`);
// }else if(day ==2){
//     console.log(`it is monday`);
// }else if (day ==3){
//     console.log(` it is tuesday`);
// }else if (day ==4){
//     console.log(` it is wednesday`);
// }
// else if (day ==5){
//     console.log(` it is thusday`);
// }
// else if (day ==6){
//     console.log(` it is friday`);
// }
// else if (day ==7){
//     console.log(` it is saturday`);
// }else{
//     console.log(`${day} is not a day`);
// }

// or we can do 
// let day = 7 ;
// switch(day){
//     case 1 :
//         console.log("It is sunday");
//         break;
//         case 2:
//             console.log("It is monday");
//             break;
//             case 3 :
//                 console.log("It is tuesday");
//                 break;
//                 case 4 :
//                     console.log("It is wednesday");
//                     break;
//                     case 5:
//                         console.log("it is thursday");
//                         break;
//                         case 6 :
//                             console.log("It is friday");
//                             break;
//                             case 7 :
//                                 console.log("It is saturday")
//                                 break;
//                                 default:
//                                     console.log(`${day} is not a day`);
                                    
// }


// better example
let testscore = 82;
let letterGrade;
switch(true){
    case testscore>= 90:
        letterGrade = "A"
        break;
        case testscore >=80:
            letterGrade = "B"
            break;
            case testscore >= 70:
                letterGrade = "C"
                break;
                case testscore >= 60:
                    letterGrade ="D"
                    break;
                    default:
                        letterGrade = "fail"

}
console.log(letterGrade);

