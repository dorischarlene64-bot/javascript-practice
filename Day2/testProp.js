// Testing objects for properties //
var myObj={
    gift : "pony",
    pet : "kitten",
    bed : "sleigh"
};
function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }
    else{
        return "NOt Found";
    }
}
console.log(checkObj("gift"));

// Manipulating Complex Objects //
//A javascript object is a way to store flexible data.//

var myMusic={
    "artist" : "Billy Joel",
    "title" : "Piano Man",
    "release-year" : "1973",
    "Formats" : [
        "CD",
        "8T",
        "LP"
    ],
    "gold" : true
}