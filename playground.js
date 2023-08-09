//ES6 Fat arrow function

//# normal function
function number(){
    return 10;
}
console.log(number())

//# arrow function

let numberArrow = ()=>{
    return 20;
}
console.log(numberArrow())

//arrow function ta suto korar jonno
//jodi arrow function er modde 1 tai statment thake
let numberArrowShort = ()=> 30;

console.log(numberArrowShort())

//jodi return er poriborte console.log thake 

let numberArrowClg = ()=>{
    console.log("first", 40)
}
numberArrowClg()