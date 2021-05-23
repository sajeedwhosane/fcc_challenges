/*
Challenge #8:

Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 Return the truncated string with a ... ending.


*/

function truncateString(str, num) {
    if(num<str.length){
       let rString=str.substring(0,num);
       rString+="...";
       return rString;
       }else if(num >=str.length){
         return str;
       }
   }
  
let res=  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
document.getElementById('c8').innerHTML=res;   

/*
Tests:

truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....

Passed
truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....

Passed
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.

Passed
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.

Passed
truncateString("A-", 1) should return the string A....

Passed
truncateString("Absolutely Longer", 2) should return the string Ab....


*/