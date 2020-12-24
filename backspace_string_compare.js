/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".

*/
    var S = "a#c";
    var T = "#a#c";
    var stack_first  = [];
    var stack_second = [];
    
    for(var ch of S){
        if(ch === '#') stack_first.pop();
        else stack_first.push(ch);
    }
    
    for(var ch of T){
        if(ch === '#') stack_second.pop();
        else stack_second.push(ch);
    }
    
    if(stack_first.toString() === stack_second.toString()) return true;
    return false;