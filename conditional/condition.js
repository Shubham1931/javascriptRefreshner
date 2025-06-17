// falsy values
// false,0,-0,Nan,undifiend,empty String,empty array,bigint 0n , null
// for example
const userEmail = "shubham@gmail.com"
if(userEmail){
    console.log("email found");

    
}else{
    console.log("email not found");
    
}
// nullish coalesing operator
let val1 ;
val1 = null?? 10
val1 = undefined?? 10