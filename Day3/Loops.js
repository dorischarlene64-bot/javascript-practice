// Iterate with while loop //
var myArray = [];
var i=0;
while(i<5){
    myArray.push(i);
    i++;
}
console.log(myArray)
// Iterate with for loop //
var ourArray = [];
for(var i=0; i<5; i++){
    ourArray.push(i);
}
console.log(ourArray)
// Iterate Odd Number with for loop //
var ourArray = [];
for(var i=1; i<10; i+=2){
    ourArray.push(i);
}
console.log(ourArray)
// Count Backwards with for loop //
var ourArray = [];
for (var i=10; i>0; i-=2)
{
    ourArray.push(i);
}
console.log(ourArray)
// Iterate through an Array with a for loop //
var ourArr = [9,10,11,12];
var ourTotal = 0;
for(var i=0; i<ourArr.length; i++){
    ourTotal += ourArr[i];
}
console.log(ourTotal)
//Nesting for loop //
function multiplyAll(arr){
    var product = 1;
    for (var i=0; i<arr.length; i++){
        for (var j=0; j<arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}
 var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
 console.log(product)
 // Iterate with Do-While loop //
 var myArray = [];
 var i=10;
 do{
    myArray.push(i);
    i++;
 }while(i<5)
    console.log(i,myArray);