let arr = [1,3,5,7];
let last = arr.length;
arr[last] = 2;
console.log(arr);  //last element added 

arr.pop(last);
console.log(arr); //popped last element from array 

console.log(arr.join("-")); //joining all the elements 

let string = "i am ajay working today";
const mystring = string.split(" ");
let word = mystring[1];
console.log(word);    //splitting or seperating the charectors in a string

