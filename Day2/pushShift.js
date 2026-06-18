function nextInLine(arr,item)
{
    arr.push(item);
    return arr.shift();
}
var textArr=[1,2,3,4,5];
console.log("Before:"+JSON.stringify(textArr));
console.log(nextInLine(textArr,6));
console.log("After:"+JSON.stringify(textArr));