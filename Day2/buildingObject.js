// Building objects //
var ourDog = {
    "name": "Camper",
    "Legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
// Accessing object properties with Dot Notation //
var hatValue = ourDog.name;
var shirtValue = ourDog.Legs;
console.log(hatValue)
console.log(shirtValue)
//Accessing object with Bracket Notation //
var entreeValue = ourDog["tails"];
var drinkValue = ourDog["friends"];
console.log(entreeValue)
console.log(drinkValue)
//Accessing objects with variables //
var testobj = {
    12 : "Namath",
    16 : "Montana",
    19 : "Unitas"
};
var playerNumber = 16;
var player = testobj[playerNumber];
console.log(player)
// Updating onject properties //
ourDog.name = "Happy Camper"
console.log(ourDog.name)
// Add new properties to an object //
ourDog.bark = "bow-bow"
console.log(ourDog.bark)
// myDog['bark'] = "woof!"; //
// Delete properties //
delete ourDog.bark;
