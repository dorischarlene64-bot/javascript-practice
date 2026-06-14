function worldBlank(myNoun, myAdjective, myVerb, myAdverb){
    var result;
    result += "The"+" "+myAdjective+" "+myNoun+" "+myVerb+" "+"to the store"+" "+myAdverb+".";
    return result;
}
console.log(worldBlank("dog", "big", "ran", "quickly"));