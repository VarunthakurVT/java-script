//there are meinly two types of loops (exit control and entry control)
//loops are used to exicute piece of code again and again (there is for loop ,while loop and do while loop)
//for loop 
// for (let i=0;i<5;i++){
//     console.log("Varun thakur")
// }
// console.log("loop has ending")
//this is the basic example of the loop 
//calcululate the sum 1 to 10
// let a=0;
// for (let i=1;i<=10;i++){
//  a=a+i

// }
// console.log(a)
//infinite loop have not last ending condition(a loop never ends)
// let a=0;
// for (let i=1;i<=10;i++)// with out {} a=a+1 work because due to this {}use to print many lines ;
//  a=a+i;


// console.log(a)

// 
let a=0;
for (var i=1;i<=10;i++); //in this i used var because i want global scope and when hte loop terminate it works 
 a+=i

console.log(a)