let score = "33abc"

// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// boolean => true = 1; false = 0

let isLoggedIn = "Ayush"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//  1 = true
//  ""  = false
// "ayush" = true

let someNumber = 58
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

/**************Operations*****************/

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**5);
// console.log(2/6);
// console.log(2%6);

let str1 = "hello"
let str2 = " ayush"

let str3 = str1 + str2
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log(1+2+"2");  // due to ECMA script guidelines

console.log(+false); // 0
console.log(+true); // 1
console.log(+""); // 0