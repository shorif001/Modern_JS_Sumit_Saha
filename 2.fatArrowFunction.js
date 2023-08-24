//ES6 Fat arrow function

 
// //# normal function
// function number() {
//   return 10;
// }
// console.log(number());

// //normal function with parameter
// function number(n) {
//   return 10;
// }
// console.log(number());

// //# arrow function

// let numberArrow = () => {
//   return 20;
// };
// console.log(numberArrow());

// //arrow function ta suto korar jonno
// //jodi arrow function er modde 1 tai statment thake
// let numberArrowShort = () => 30;

// console.log(numberArrowShort());

// //jodi return er poriborte console.log thake

// let numberArrowClg = () => {
//   console.log(40);
// };
// numberArrowClg();

// //example

// var javascript = {
//   name: "javascript",
//   libraries: ["React", "Angular", "Vue"],
//   printLibraries: function () {
//     // this.libraries.forEach(function (a) {
//     this.libraries.forEach( (a) =>{ //fat arrow function
//       console.log(`${this.name} loves ${a}`);
//     });
//   },
// };
// javascript.printLibraries();

// //forEach() array er prottecta element er vitore jabe ba check korbe.

// //this mane tar bairer object ta (this j khane likhbo tar bairer objectai this.)
// //forEach function er vitorer this ta kokhonoi bairer this na.



// const searchInput = document.querySelector(".search");
// const display = document.querySelector(".result");
// const thanks = document.querySelector(".thanks");

// //# normal function that works perfectly
// function show(){
//     display.innerHTML = this.value; //value pacchi
//     var self = this;
//     setTimeout(function(){
//         thanks.innerHTML = `You have typed: ${self.value}`;
//     }, 1000)
// }

// searchInput.addEventListener("keyup", show)



//jodi bhitore change na hoy tahole arrow function



let masud = {
  name: "masud Karim",
  shompod: ['bari', '2ta gari', '3ta nari'],
  manushJane: function(){
    const jane = this;
    this.shompod.forEach(function(a){
      console.log(`${jane.name} dhakay ${a}`)
    })
  }
}
masud.manushJane()

console.log("fat arrow function end")