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