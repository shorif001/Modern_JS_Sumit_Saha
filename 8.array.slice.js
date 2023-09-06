//array.slice()

var numbers = [/*0 kop*/1,/*1 kop*/ 2,/*2 kop*/ 3, 4, 5, 6, 7, 8, 9, 10];

/*
array.slice() 2 ta parameter ney (start index, end index)
*/
var result = numbers.slice(1, 3)//bam pash theke newar jonno

// console.log(result)


var numbers1 = [/*10 kop*/ 1, /*9 kop*/ 2, /*8 kop*/ 3, /*7 kop*/ 4, /*6 kop*/ 5, /*5 kop*/ 6, /*4 kop*/ 7, /*3 kop*/ 8, /*2 kop*/ 9, /*1 kop*/ 10 /*0 kop*/];
var result1 = numbers1.slice(-5, 10)//dan pash theke newar jonno

console.log(result1)