let s="rishi" //  this is primitive more like wrapping
let t=String("rishi") 
// both of s and t is similer
console.log(s instanceof String) // false only works when it is a object

console.log(s===t)// true
let h=s
h="thakkar"// it is also invoking object
console.table([s,h])
console.log(s.length);
let n= new String("rishi"); // thsi is object
console.log(n instanceof String) //true
h=n
console.table([n,h]);// will print object literal (key-value pair)
h= h.toUpperCase(); // return a copy  .... not change anything in many string
console.table([s,h]);
console.log(s.length);
// in js string are imutable so we can not cnage the main string
console.log()

n[0]='t';// nothing is going to change as string is immutable

console.log(n[0]) // (by key-value pair)
console.log(n.__proto__) // just for getting prototype
// string methodes 
console.log(n===s)// false


console.log(s.toUpperCase());

console.log(s.charAt(2))

console.log(n.indexOf('r'));//0
console.log(n.indexOf('ish'));//1   
console.log(n.indexOf('af'));//-1

let gameOne="rishi thakkar";
console.log(gameOne.lastIndexOf('r'))// return last index
console.log(s.concat("rishi ", ` ngkjjfj  `," gsg",n));// we can concate multiple string

console.log(gameOne.replace('r','t')); // replace the first occurens of r to t
console.log(gameOne.replaceAll('r','t')); // replace all occurens of r to t
let arry=gameOne.split(" ");
console.log(arry);

console.log(s.split(1,4));