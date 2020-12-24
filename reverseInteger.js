/*
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0

Extra input : 2147483647
*/


var x = -123;
var typeOfx = "negative";
if(x==0) return 0;
if(x > 0) 
{
  typeOfx = "positve";
}

var newArray = Math.abs(x).toString().split('');
var tempString = '';
for(var i=newArray.length - 1;i>=0;i--){
    
    if(newArray[i] === '0' && !tempString)
    {
    }
    else
    {
      tempString = tempString.concat(newArray[i]);   
    }
}

if(typeOfx === 'negative'){
    var newString = "-"+tempString;
    return parseInt(newString) < -2147483647 ? 0 : parseInt(newString);
}

return parseInt(tempString) > 2147483647 ? 0 : parseInt(tempString);