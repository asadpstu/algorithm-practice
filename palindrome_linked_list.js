/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
*/

class LinkNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class LinkedList{
    constructor(head=null){
        this.head = head;
    }
}

var isPalindrome = function(head) {
    var array = [];
    if(!head) return null;
    
    else
    {
       array.push(head.val);
       
        var node = head.next;
        var current = node;
        while(current){
            array.push(current.val);
            current = current.next;
        }
        var middle = 0;
        var even = false;
        if(array.length % 2 === 0){
           middle = array.length / 2;   
        }
        else
        {
            middle = Math.floor( array.length / 2)
        }
        
        for(var i=0;i<middle;i++){
            if(array[i] === array[array.length - (i+1)]){
                continue;
            }
            else
            {
               return false;        
            }
        }
        return true;
    }
    
    
};