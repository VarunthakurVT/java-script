//there are mainly two types of data types--
//1)primitive dt(mainly 7)
//2)non primitive dt(like object(is the collection of the value ,in key value pair),etc)

//prmitive data type
// 1)number
a=23;
console.log(typeof(a));
//2)string
fullName="varun thakur"
console.log(typeof(fullName))
//3)bollean 
follow=true
console.log(typeof(follow))
//4)undefined
let x;
console.log(typeof(x))
// 5)null 
let y=null
console.log(typeof(y))
// 6)BigInt
let BigInt=34234
console.log(typeof(BigInt))
// 7)symbol
let z=Symbol("hi!")
console.log(typeof(z))

//object (in like key value pair key:value)
const student={
    fullName:"varunThakur",
    age:18,
    dept:"cs",
    cgpa:8.88,
    isPass: true,
 };
 student.age=student.age+1 //we can change the keys
  console.log(student.fullName)
  console.log(student.age)
  
