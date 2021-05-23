/*
Challenge #7:
Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method.


*/

function repeatStringNumTimes(str, num) {
    let s="";
    if(num <=0){
        return s;
    }else{
        for(let i=0;i<num;i++){
            s+=str;
        }
    }
    return s;

  }
  
 let s= repeatStringNumTimes("abc", 3);
 document.getElementById('c7').innerHTML=s;