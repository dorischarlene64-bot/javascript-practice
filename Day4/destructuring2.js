// Destructuring Assignment with Nested Object //
const LOCAL_FORECAST = {
    today : { min : 72, max : 83 },
    tomorrow : { min : 73.3, max : 84.6 }
};
function getMaxOfTmrw(forecast){
    "use strict";
    const { tomorrow : {max : maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));
 // Use Desturucturing Assignment to asssign variables from Arrays //
 // Diff: b/w destructuring from object and destructuring from an array is that you cannot specify which element from the array to go into a variable. //
 // It just goes with the order. //
 const [z,x,y] = [1,2,3,4,5,6];
 console.log(z,x,y);
 // We can also use destructuring of arrays to switch the places of variable //
 let a=8, b=6;
 ( () => {
    "use strict";
    [a,b] = [b,a]
 })();
 console.log(a)
 console.log(b)
// Use Destructuring Assignment with the Rest Operator to reassign array elements //
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [, , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// Using Destructuring Assignment to pass an object as a function's parameters //
const stats = {
    max : 56.78,
    standard_deviation : 4.34,
    median : 34.54,
    mode : 23.87,
    min : -0.75,
    average : 35.85
};
const half = (function(){
    return function half({max, min}){
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));