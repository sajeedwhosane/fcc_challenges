/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    let strArr=str.split(" ");
    let lSNumber=0;
    for(let i=0;i<strArr.length;i++){
        if(lSNumber < strArr[i].length){
            lSNumber=strArr[i].length;
        }
    }
    return lSNumber;
  }
  
  let str=findLongestWordLength("The quick brown fox jumped over the lazy dog");
  document.getElementById('c4').innerHTML=str;