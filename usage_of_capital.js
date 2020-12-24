/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
 

Example 1:

Input: "USA"
Output: True
 

Example 2:

Input: "FlaG"
Output: False

*/

    var word = 'mL'; //Facebook // USA // usa // mL
    var array = word.split('');
    //detecting sequence
    var sequence = null;
    var first = 'a'.charCodeAt(0)  - word.charCodeAt(0);
    var second = 'a'.charCodeAt(0) - word.charCodeAt(1);
    
    if(first >= 1 & second >= 1) {
        sequence = 'positive';
    }
    
    if(first >= 1 & second < 1) {
        sequence = 'negative';
    }
    
    if(first < 1 & second < 1) {
        sequence = 'negative';
    }
    if(first < 1 & second > 1) {
        return console.log(false);
    }
    
    for(var i=2;i<array.length;i++){
        var val = 'a'.charCodeAt(0)  - array[i].toString().charCodeAt(0);
        if( sequence === 'negative' && val < 1){
            continue;
        }
        
        else if( sequence === 'positive' && val >= 1){
            continue;
        }
        else{
           return console.log(false);        
        }
    }
    return console.log(true); 
