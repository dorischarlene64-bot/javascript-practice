//Functions with Arguments //
function Args(a,b){
    console.log(a-b)
}
Args(10,5);

//Global Scope and functions //
var myGlobal=10;
function fun1(){
    oopsGlobal=5; //Without var it'll be global//
}

function fun2(){
    var output="";
    if(typeof myGlobal != "undefined"){
        output+="myGlobal:"+ myGlobal;
        if(typeof oopsGlobal != "undefined"){
            output += "oopsGlobal:" + oopsGlobal;
        }
    }
    console.log(output);
}
fun1();
fun2();
 // Local scope and functions //
 function myLocal(){
    var myVar=5;
    console.log(myVar)
 }
 myLocal();
 // console.log(myVar) it will show error //

 //Global vs Local scope //
var outerWear="T-shirt";
function myOutfit(){
    var outerWear="Sweater";
    return outerWear;
}
console.log(myOutfit()); // Local variable takes precedent over the global //
console.log(outerWear);

//Return a value from a function with return values //
function mSeven(num){
    return num-7;
}
console.log(mSeven(10))

// Understanding undefined value//
//REturned from a function//
var sum=9;
function addThree(){
    sum+=3;
}
console.log(sum)

//Assignment with a returned value//
var changed=0;
function change(num){
    return (num+5)/3;
}
changed=change(10);
console.log(changed)

var processsed=0;
function processArg(num1){
    return (num1+3)/5;
}
processed=processArg(7);
console.log(processed)