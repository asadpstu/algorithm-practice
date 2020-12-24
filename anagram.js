/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

*/
    var s = "anagram"; 
    var t = "nagaram";
    if(s.length != t.length) return false;
    
    var settoupdate = {};
    
    for(var newChar of s){
        if(settoupdate[newChar]){
          settoupdate[newChar] ++;  
        }
        else
        {
          settoupdate[newChar] = 1; 
        }
    }
    
    for(var newChar of t){
        settoupdate[newChar] --; 
        if(settoupdate[newChar] < 0){
           return false;
        }
    }
    
    for(var key in settoupdate){
        if(settoupdate[key] === 0) continue;
        else return false;
    }
    
    return true;