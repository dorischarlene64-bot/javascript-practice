// Anonymous --- does not have a name //
// Whenever you have an anonymous function can consert it into an arrow function. //
/* var magic = function(){
    return new Date();
}; 
instead */
var magic1 = () => {
    return new Date();
};
// If we are returning one value here we do not need the return keyword and curly braces //
const magic = () => new Date();
// Arrow function with parameters //
var myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
};
console.log(myConcat([1,2],[3,4,5]));
// Higher order Arrow functions //
/* const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];
const squareList=(arr)=>{
    const squaredIntegers = arr;
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers) */
// Map --- use function as an argument //
//x --- every element from the array that is being passed to it //
const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];
const squareList=(arr)=>{
    const squaredIntegers = arr.filter(num => NumberisInteger(num) && num>0).map(x => x*x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers)