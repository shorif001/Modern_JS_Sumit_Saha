//ternary operator
//ternary operator janle code onek kom likha jay.

//simple example

var age = 18;
var type;

if(age >= 18){
    type = "adult"
}else{
    type = "child"
}

//ternary operator example

var age1 = 19;
var type1 = (age1 >= 18) ? "jodi value true hoy tahole eita" : "jodi value false hoy tahole eita";
// console.log(type1)

// jodi condition r o beshi thake
var age2 = 11;
var type2 = (age2 >= 18) ? "jodi value true hoy tahole eita" : (age2 < 10) ? "child":"young";
// console.log(type2)

//2 ta condition check korar jonno hole ternary operator use korai valo
// jodi r o beshi condition check korte hoy tahole if else ba switch use kora better

//ternary operator a r o short ekta jinish ase sheta holo:

//example

/*ami chassi jodi isLoggedin true hoy tahole access o true hobe.
r jodi isLoggedin false hoy tahole access o false hobe.
*/
var isLoggedin = true;
var access = isLoggedin ? true : false
// console.log(access)

//or

var a = 6;

// var access1 = a > 5 ? true : false;
var access1 = a > 5;
// a 5 er cheye boro
console.log(access1)