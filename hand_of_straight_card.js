/*
Alice has a hand of cards, given as an array of integers.

Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

Return true if and only if she can.

Note: This question is the same as 1296: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/

 

Example 1:

Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
Example 2:

Input: hand = [1,2,3,4,5], W = 4
Output: false
Explanation: Alice's hand can't be rearranged into groups of 4.

*/
    
    var hand = [1,2,3];
    var W = 1;
    
    var count = hand.length;
    if(count % W != 0 ) return console.log(false);
    if(W === 1) return console.log(true);
    hand.sort(function (a,b) { return a-b});
    var stack = [];
     
    var i = 0;
    while(hand.length >=1)
    {   
        console.log(hand.length)
        if(stack.length === 0)
        {
            stack.push(hand[0]);
            hand.splice(0,1)
        }
        else
        {
            var lastElementOfStack = stack[stack.length - 1]; 
            if(lastElementOfStack === 'new'){
                stack.pop();
                var newSeq = hand[0];
                stack.push(newSeq);
                hand.shift();
                lastElementOfStack = newSeq;
            }
            var findConsecutiveNumber = lastElementOfStack + 1;

            var brk = false;
            var k = 0;
            for(k=0;k<hand.length;k++)
            {
                if(hand[k] === findConsecutiveNumber)
                {
                    stack.push(findConsecutiveNumber);
                    hand.splice(k,1); 
                    brk = true; 
                } 
                if(brk === true){
                    k = 0;
                    break;  
                } 
            }

            if(stack.length % W === 0){
                if(hand.length !== 0) stack.push('new');
            }
            
        }

        if(brk === false) return console.log("kutub",false);

    
    } 

    console.log(hand);
    console.log(stack);
    return console.log(true)

