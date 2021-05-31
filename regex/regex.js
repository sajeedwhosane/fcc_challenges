/*
test() method
JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. 
The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), 
and returns true or false if your pattern finds something or not.
using test() method we can only check if a pattern exists in a string or not.
The test method returns true or false.
eg:
regex.test(string);

*/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);


/*
Match a Literal String with Different Possibilities
'|' OR operator can be used to match for more than one regex 
*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result1 = petRegex.test(petString);
console.log(result1);


/*
Ignoring case while match using flag i

 You can use it by appending it to the regex. 
 Eg:
 /ignorecase/i. 
 
 This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
*/
// regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.


let myString2 = "freeCodeCamp";
let fccRegex2 = /freecodecamp/i; 
let result2 = fccRegex2.test(myString);

/*
Extract Matches
using match() method
You can extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
eg:str.match(regex);
*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result3 = extractStr.match(codingRegex); 


/*
Find More Than the First Match
To search or extract a pattern more than once, you can use the g flag.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result4 = twinkleStar.match(starRegex); // Change this line
console.log(result4);