// Array.prototype.find()

// var numbers = [1, 2, 3, 4, 5, 6, 10];
// numbers.find()

/*numbers array er modde find() k call korte pari karon numbers notun ekta Array toiri kore.
sheitar prototype er modde find() thake jar karone prototype er karone amra last object ta diyeo 
find k pai
*/

/* find() method er kaj hosse numbers array er prottekta element er modde diye jabe 
ami find() er modde perameter hishabe ekta function k pathabo. find() bole vai amake ekta kaj daw
j kaj ta ami tomar prottek ta element er modde diye jawar shomoy korbo. 
ebong kajta korte giye jodi ekbar tumi amake true return kore daw tahole ami 
sheikhan theke ber hoye ashbo porer element gulote r jabena*/

/* amra kono particolar element jodi khujte chai ba pete chai tahole ami shei shomoy 
find() use korbo*/

var numbers0 = [1, 2, 3, 4, 5, 6, 10];
var result = numbers0.find(function (khujun) {
  return khujun > 4;
});
console.log(result);

var numbers1 = [1, 2, 3, 4, 5, 6, 10];
numbers1.find(function (currentValue) {
  /*prothom j parameter ta pay sheta hosse current value
      mane ami jodi 1 a jassi, 2 a jassi, 3 a jassi. 
      jokhon j number a ami asi shetai hosse current value 
      
      function ta (currentValue, a, b){..} kintu r o 2 ta jinish pay 
      1. currentIndex, 2. main array / numbers1 array
      ei 2 taw amar proyojon hote pare jemon: jodi emon kono operation korte hoy
      ami j value ta passi tar currentIndex koto. jodi sheta 3 hoy tahole currentIndex hosse 2.
      main array taw dekhanor proyojon hote pare.

      amra j bollam array.find() prothom perameter hishabe 1ta function ney
      r 2nd parameter hishabe ney hosse, this
      this er example niche dewa holo.
      */
});

//example

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  /*
  constructor hosse! 1 ta object k diye vinno vinno object toiri kora.
  jemon: shorif er jonno 1ta object korimer jonno 1 ta object shojib er jonno ekta object
  example:

   function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function(){
      return this.firstName + " ", this.lastName
    }
  }

  ami ekta Person name function toiri korlam 
  ei function ta bebohar kore ami 
  shorif name function toiri korbo 
  shojib name function toiri korbo 
  korim name function toiri korbo 
  r o onek name.

  ei Person function take mone kori ekta kathamo ba gothon

  constructor function er niom hosse Prothom okkhor Boro hater diye shuru hobe. jemon likhesi Person()

  ekhon cholen onek gulo function banai:

  const shorif = new Person("shorif", "ahmed", 27);
  const shojib = new Person("shojib", "hasan", 30);
  const korim = new Person("korim", "hawladar", 32);

  consol.log(shorif)
  consol.log(shorif.fullName())
  consol.log(shojib)
  consol.log(korim)


  //full example

     function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function(){
      return this.firstName + " ", this.lastName
    }
  }

    const shorif = new Person("shorif", "ahmed", 27);
  const shojib = new Person("shojib", "hasan", 30);
  const korim = new Person("korim", "hawladar", 32);

    consol.log(shorif)
  consol.log(shorif.fullName())
  consol.log(shojib)
  consol.log(korim)

//ami chassi shorif function er modde country name ekta property add korte chai
//tokhon:
shorif.country = 'Bangladesh'
console.log(shorif)

  */

  test() {
    console.log("hello");
  }
  exampleFunction() {
    let array = [1, 2, 3];
    array.find(function () {
      this.test();
    }, this);
  }
}

let student = new Student("Shorif", 27);

student.exampleFunction();


function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function(){
    return this.firstName + ' ', + this.lastName
  }
}

const shorif = new Person("shorif", "ahmed", 27);
const shojib = new Person("shojib", "hasan", 30);
const korim = new Person("korim", "hawladar", 32);

console.log(shorif)
console.log(shojib.fullName());
console.log(shojib)
console.log(korim)

//ami chassi shorif function er modde country name ekta property add korte chai
//tokhon:
shorif.country = 'Bangladesh'
console.log(shorif)