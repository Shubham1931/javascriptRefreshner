// for of
// const arr = [1,2,3,45,5]
// for (const i of arr) {

// console.log(i)    
// }
//Maps
const map = new Map()
map.set("IN","india")
map.set("usa","sdfasf")
// console.log(map.values());
for (const [key,values] of map) {

    // console.log(key+"->"+values);
    
}


// for in loop
const myobj ={
    "1":"asdaf",
    "2":"sdfad"
}
 for (const key in myobj) {
//    console.log(myobj[key]);
   
 }

// for each
const arr=[1,2,3,4,5]
arr.forEach((item,index,arr)=>{
    arr[index] = arr[item]*2

  console.log(item)
})
console.log(arr)