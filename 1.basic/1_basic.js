//js is the extenstion of the js 
console.log("Hello world");
//console .log is used to print the output
//; is like a full stop in js not mendentory to write ; but good practice to : use

//2 ) veriable is just like a container to store data 
name="varunthakur"//this is a veriable 
console.log(name)
//there are the data type same just like other programming language 
//undefined means a variable or property exists but has no assigned value (automatic from JavaScript),
//  while null is explicitly assigned by developers to indicate "no value" or intentional emptiness
a =null; //= is the assignment operator
b =undefined;
console.log(a);
console.log(b);
//there is another data type bollien it only store true and false value 
isFollow=false;
console.log(isFollow);
//it is dynamically type language means you can sotre different type of data without declaring the data type
 
//rules to define the veriable 
// case sensitive and white space is not allowed and no character is not allowed only ($,_ are allowed )
// reserved word not allowed

//Feature 	var	             let	    const
// Scope	Function scope	Block scope	Block scope
// Reassignable	Yes     	Yes	        No
// Redeclarable	Yes	        No	         No
// Hoisting yes(initialized Yes (uninitialized)	Yes (uninitialized)
// Initial Value:Optional	Optional	Required


{
    let a=23;
    console.log(a);
}//this is one block
{
    let a=343;
    console.log(a);
} //this is another block
//mostly we use let or const in the new version of js
