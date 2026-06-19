// Accessing Nested Arrays //
var myPlants=[
{
    type : "flowers",
    list : [
        "rose",
        "tulip",
        "dandelion"
    ]
},
{
    type : "tree",
    list : [
        "fir",
        "pine",
        "birch"
    ]
}
];

var secondTree = myPlants[1].list[1];
console.log(secondTree)