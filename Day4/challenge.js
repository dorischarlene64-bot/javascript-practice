// Coding Challenge //
const result = {
    success:["max-length", "no-amd", "prefer-arrow-functions"],
    failure:["no-var", "var-on-top", "linebreak"],
    skipped:["id-blacklist", "no-dup-keys"]
};
function makelist(arr){
    const resultDisplayArray = [];
    for(let i=0; i<arr.length; i++){
        resultDisplayArray.push(`<li class = "text-warning"> ${arr[i]}</li>`)
    }
    return resultDisplayArray;
}
const resultDisplayArray = makelist(result.failure);
console.log(resultDisplayArray)