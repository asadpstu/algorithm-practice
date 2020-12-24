/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.


Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/
    var s = ["H","a","n","n","a","h"];
    var middle = 0;
    var tempSwap =  null;
    var tempToSwap = null;
    if(s.length % 2 == 0) middle = s.length / 2;
    else middle = Math.floor(s.length / 2);
        for(var i=0;i<=middle-1 ;i++){
           tempSwap =  s[i];
           tempToSwap = s[s.length - (i+1)];
           s[s.length - (i+1)] = tempSwap;
           s[i] = tempToSwap; 
        } 
    return s;