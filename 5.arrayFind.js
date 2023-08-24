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

/* amra kono particolar element jodi khujte chai ba pete chai tahole ami shei shomoy find() use korbo*/

var numbers0 = [1, 2, 3, 4, 5, 6, 10];
var result = numbers0.find(function(khujun){
  return khujun > 4;
});
console.log(result)

var numbers1 = [1, 2, 3, 4, 5, 6, 10];
numbers1.find(function(currentValue){
    /*prothom j parameter ta pay sheta hosse current value
      mane ami jodi 1 a jassi, 2 a jassi, 3 a jassi. 
      jokhon j number a ami asi shetai hosse current value */
})