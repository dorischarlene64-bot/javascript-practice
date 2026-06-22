// Mmutate an Array declared with const //
const s=[5,7,2];
function editInPlace(){
    "use strict";
    s[0]=2;
    s[1]=5;
    s[2]=7;
}
editInPlace();
console.log(s)
// Prevent object Mutation //
// If you have an object or an array, you can still mutate it even it is declared with const. //
// object.freeze --- that will prevent data mutation //
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI : 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try{
        MATH_CONSTANTS.PI = 99;
    }catch(ex){
        console.log(ex)
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI)