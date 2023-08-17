//truthy falsy value

/* truthy or falsy value jeta boolian a cust hobe jokhon kono boolian context a amra evaluate korbo */

//example
// Boolean context mane jemon = if hosse boolean context
//if er modde () breaket diye ami jei condition e likhi shetai cust hoy truthy/falsy boolean te
//jemon:

var myVar = 0;
if(myVar){
    console.log("i am truthy")
}else{
    console.log("i am falsy")
}

/* javascript a truthy or falsy bolte bujhay jodi eta = 
jodi false na hoy, 
jodi 0 na hoy, 
jodi blank ba empty string na hoy, 
jodi null na hoy, 
jodi undefiand na hoy, 
jodi not a number na hoy taholei she truthy value other wise she falsy  
*/

//variable a jodi : 6 ta na thake tahoe shob truthy
// false, 0, "", null, undefined, NaN = ei shob gulo falsy r baki shob truthy

var myVar1 = []
if(myVar1){
    console.log("i am truthy")
}else{
    console.log("i am falsy")
}