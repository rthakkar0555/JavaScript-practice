let score="33"
let scoreIntValue= Number(score) // type convertion // wraper class
console.log(typeof score) // string
console.log(typeof scoreIntValue) // number
console.log(scoreIntValue) // 33

score="33ad"
scoreIntValue = Number(score)
console.log(typeof score) // string
console.log(typeof scoreIntValue) // number bcs NaN it self is number
console.log(scoreIntValue) // NaN 

score=null
scoreIntValue = Number(score) // convert 0
console.log(typeof score) // object
console.log(typeof scoreIntValue) 
console.log(scoreIntValue) // NaN

//
/*
  in case of undefined it will be converted in NaN
  in case of boolean value it will be 1=>true ans 0=>false
  for some string like "rishi" it will be NaN
*/

// Boolean

let isLogin=1
let boolIsLogin=Boolean(isLogin)

console.log(boolIsLogin)

/* 
for boolean convertion implicite or explicit it will check the truth value of it
we have truth value for all kind of value and object
1=>true
0=>false
""=>false
"rishi"=>true

// all depends on truth values
*/

// in string
let num=33
let stringNumber=String(num)
console.log(stringNumber)
console.log(typeof stringNumber)

let s=String(null); // null
console.log(s); 
// continue your investigation

// operation interview

console.log(null == 0) ; // false because in this null is  loosely undifined
console.log(null >= 0) ; // true because in this null is 0

console.log(undefined == 0) // fasle

// primitive 
/* string , number , boolean , null , sybole , bigint , null , undefined */

// non- primitive
/* function(callebel object) , array(object) , object  */