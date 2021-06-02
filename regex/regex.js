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

/*
Match Anything with Wildcard Period
'.'The wildcard character . will match any one character. The wildcard is also called dot and period.
eg: var regex=/fu./;
*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result5 = unRegex.test(exampleStr);
console.log(result5);

/*
Match Single Character with Multiple Possibilities
You can search for a literal pattern with some flexibility with character classes. 
Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
eg: for regex1


*/
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result6 = quoteSample.match(vowelRegex); 
console.log(result6);


/*
Match Letters of the Alphabet using a  character set.
using hyphen character '-' you can select a range of characters.

Match all the letters in the string quoteSample.

Note: Be sure to match both uppercase and lowercase letters.
*/

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result7 = quoteSample.match(alphabetRegex);
console.log(result7);


/*
Match Numbers and Letters of the Alphabet
Hyphen can also be used to check for a range of numbers.

*/
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex8 = /[h-s2-6]/gi; // Change this line
let result8 = quoteSample.match(myRegex); // Change this line
console.log(result8);


/*
Match Single Characters Not Specified
Negated character sets:
you can create a set of characters you do not want to match.
To create a negated character set, you place a caret character (^)
var regex=/[^aeiou]/gi
*/
let quoteSample = "3 blind mice.";
let myRegex9 = /[^aeiou0-9]/gi; 
let result9 = quoteSample.match(myRegex9); 

/*

*/
