// Math.floor --- rounds down to the nearest whole number //
// Math.random can not be 1 //
// It will generate between 0 and 19 //
var randomNumberBetween0and19 = Math.floor(Math.random()*20);
function randomWholeNum(){
    return Math.floor(Math.random()*10);
    // generate between 0 and 9 //
}
console.log(randomWholeNum());

// Generate whole Numbers within a range //
// Get a random number between min and max //
function ourRandomRange(ourMin,ourMax)
{
    return Math.floor(Math.random()*(ourMax-ourMin +1)) + ourMin;
}
console.log(ourRandomRange(1,9))