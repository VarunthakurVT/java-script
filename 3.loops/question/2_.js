let gameno=25;
let userno=prompt("Guess the number");
console.log(userno);
// if(userno=gameno){
//     console.log("you guess right");
// }else{
//     console.log("you guess wrong");
// }
while(userno!=gameno){
userno=prompt("you Guess wrong  number");
}
if(userno === gameno) {
    console.log("🎉 Correct! The number was", gameno);
} else {
    console.log("Game over");
}