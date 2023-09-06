//Array.prototype.findIndex()

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.findIndex((currentValue, index, arr)=>{
    return !(currentValue % 2)
})

// console.log(result)


var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result1 = numbers1.findIndex((currentValue, index, arr)=>{
    return currentValue > 6
})

console.log(result1)