/*
Challenge #2:
Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

*/

function reverseString(str) {
    let strArr=str.split("");
    let rString="";
    for(let i=(strArr.length-1);i>=0;i--){
        rString+=strArr[i];
    }
    return rString;
  }
  console.log(reverseString("hello"));
  document.getElementById('c2').innerHTML=reverseString('hello');