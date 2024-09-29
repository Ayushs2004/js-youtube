const accountId = 554488   // const variable ko change nhi kiya ja sakta h
let accountEmail = "ayush@google.com"
var accountPass = "780878"
accountCity = "Bhilwara"

// accountId = 12  This is not allowed

accountEmail = "as@as.com"
accountPass = "16545"
accountCity = "Jodhpur"

// var ka use nhi krna bcoz issue in block scope and functional scope
// console.log(accountId);

console.table([accountId, accountEmail, accountPass, accountCity]);