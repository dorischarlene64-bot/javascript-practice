// Rest Operator allows you to create a function that takes a variable number of aeguments. (...) //
/* const sum = (function () {
    return function sum (x,y,z) {
        const args = [x,y,z];
        return args.reduce((a,b) => a+b, 0);
    };
})(); 
console.log(sum(1,2,3)); */
// instead //
const sum = (function (){
    return function sum (...args){
        return args.reduce((a,b) => a+b, 0);
    }
})();
console.log(sum(1,2,3));
// It will convert everything that is passed in into one away and the array is called args. //
// we can now also add as many numbers //

// Spread Operator --- [...] just like the rest operator but it expands an already existing array or spreads an array into the individual parts instead of the actual array here. //
// can only be used in an argument to a function or in an array literal. //
// If we want arr2 to be the copy of arr1, we can use spread operator. //
const arr1 = ['JAN', 'FEB', 'MAR'];
let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0]='potato';
})();
console.log(arr2)
console.log(arr1)