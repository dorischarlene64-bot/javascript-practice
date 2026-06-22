// parseInt --- takes a string and returns an integer //
function convertToInteger(str){
    return parseInt(str);
}
convertToInteger("56");
//Radix specifies the base of the number in the sting //
function convertIntInteger(str){
    return parseInt(str,2);
}
convertToInteger("10011");
// condition? statement-if-true:statement-if-false //
function checkEqual(a,b){
    return a===b? true:false;
    return a===b;
}
checkEqual(1,2)
// use multiple conditional (Ternary) operator //
function checkSign(num){
    return num>0? "positive":num<0? "Negative":"Zero";
}
console.log(checkSign(0));