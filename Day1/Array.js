var myArray=[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var myData=myArray[0][0];
console.log(myData)
var ourArray=[18,89,78];
ourArray[1]=45;
console.log(ourArray)
// Manipulate Arrays with push() //
var ourArray1=["Stimpson", "J", "Cat"];
ourArray1.push("Happy","Joy");
console.log(ourArray1)
// Manipulate Arrays with pop() (Ommit last element) //
var ourArray2=[1,2,3];
var rem=ourArray2.pop();
console.log(rem)
console.log(ourArray2)
// Manipulate Arrays with shift() (Ommit first element) //
var rem1=ourArray2.shift();
console.log(rem1)
console.log(ourArray2)
// Manipulate Arrays with unshift() (Replace first element) //
ourArray2.unshift("Happy");
console.log(ourArray2)