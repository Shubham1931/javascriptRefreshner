const promiseOne = new Promise(function(resolve,reject){
    // do async task
    setTimeout(function(){
        // console.log("promise created");
        
    },1000)
})
promiseOne.then(function(){
    // console.log("promise consumed")
})
 const promiseThree = new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("hello world");
},1000)
resolve({
    userName:"shubham",
    email:"shubham@gmail.com"
})

 }).then(function(data){
console.log(data);
 })