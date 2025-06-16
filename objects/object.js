// obj literals
const mysym = Symbol("key")
const jsUser = {
    name: "shubham",
    age: 18,
    loaction: "meerut",
    [mysym]: "key"
}
// console.log(jsUser["name"]);

// function
jsUser.greeting = function(){
    // console.log(`hey this is ${this.name}`);
} 
// console.log(jsUser.greeting());

// const tinderUser = new Object() // singleton user
const tinderUser ={} // non singleton object 
const regularUser = {
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstName:"hitish",
            lastName : "hello"
        }
    }
}
const obj1 = {
    1: "a",
     2: "b"
}
const obj2 ={ 3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const course={
    courseName: "js",
    price:"999",
    courseInstrutor:"shubham"
}
const{courseInstrutor} = course
// console.log(courseInstrutor);

