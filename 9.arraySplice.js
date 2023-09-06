//array.splice() = shongjukto koron



/* jokhon amar arrayr kono ek particular jaygai onno r ekta array k jura lagaite hobe ba dhukaite hobe

othoba kono ekta arrayr kono ek particular jayga theke kisu element ber kore ante hobe
emon kisu korar jonno amra splice() bebohar korbo.
*/


//var result = numbers.splice(/*kop kothay marbe*/, /*koyta element remove korbo*/, /* er por baki j element ase shob jog hoye jabe*/3, 4, 5)
// splice() 3 ta paramiter nite pare. prothom parameter ta (kop kothay marbe), 2no. paramiter koita element nibe, 3no. paramiter 
//unlimited element number dite pari. ebar aro ki ki element tumi add korte chaw.

//example

var numbers = [1, 2, 3, 4, 5]
var result = numbers.splice(1, 2, 10, 12, 13, 19);
// splice() main array k change kore dey
console.log(result)