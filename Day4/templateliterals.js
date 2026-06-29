// Creating strings using Template Literal s //
//Template Literals are a specific type of string that makes creating complex strings easier,
// multiline strings
// you can add single and double quotaion marks right in the string
// you can put variable right in the string
const person = {
    name : "Zodiac Hasbro",
    age : 56
};
const greeting = `Hello, my name is ${person.name}!
Iam ${person.age} years old.`;
console.log(greeting);