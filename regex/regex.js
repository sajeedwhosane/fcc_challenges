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
Match Characters that Occur One or More Times
'+' character can be used to check if a pattern has occured more than one time.
Sometimes, you need to match a character (or group of characters) that appears one or more times in a row.
 This means it occurs at least once, and may be repeated.
 eg regex=/a+/g
 would find one match 'aa' in aabc , 'aaa' in aaab , 'a' in abab 

*/
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result10 = difficultSpelling.match(myRegex);
console.log(result10);

/*
Match Characters that Occur Zero or More Times
The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
//let goRegex = /go*/
/*soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

In order, the three match calls would return the values ["goooooooo"], ["g"], and null.


*/
let chewieRegex = /Aa*/; 
let chewieQuote="Aaaaaaaaargh!";
let result11 = chewieQuote.match(chewieRegex);
console.log(result11);


/*
Find Characters with Lazy Matching
 a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match.
  a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
  eg: regex=/t[a-z]*i/; string="titanic"; string.match(regex); returns "titani" with greedy match
  you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
*/
let text = "<h1>Winter is coming</h1>";
let myRegex11 = /<.*?>/; // Change this line
let result12 = text.match(myRegex);
console.log(result12);

/*

*/