/*
Merge two sorted linked lists and return it as a new sorted list. 
The new list should be made by splicing together the nodes of the first two lists.

    Input: l1 = [1,2,4], l2 = [1,3,4]
    Output: [1,1,2,3,4,4]
    Example 2:

    Input: l1 = [], l2 = []
    Output: []
    Example 3:

    Input: l1 = [], l2 = [0]
    Output: [0]
    
*/

class link{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class linkedList{
    constructor(head = null){
        this.head = head;
    }
}


function merge_liked_list(l1, l2) {
    var array1 = [];
    var array2 = [];
    if(l1 != null){
        array1.push(l1.val);
        var next = l1.next;
        while(next != null){
            array1.push(next.val);
            next = next.next;
        }
    }
    
    if(l2 != null){
        array2.push(l2.val);
        var next = l2.next;
        while(next != null){
            array2.push(next.val);
            next = next.next;
        }
    }
    
    if(array1.length === 0 || array2.length === 0) {
        var tempArray = [...array1,...array2];
        return createLinkedList(tempArray);
    }
    
    var iterate = [];
    var toUpdate = [];
    if(array2.length > array1.length ){
        iterate = array1;
        toUpdate = array2;
    }
    else{
        iterate = array2;
        toUpdate = array1;
    }
    
     for(var i=0;i < iterate.length;i++){
        var pop = iterate[i];
        recursiveFunc(pop,toUpdate);
     } 
        
    return createLinkedList(toUpdate);
}


function recursiveFunc(pop,toUpdate){
    var i = 0;
    while(i < toUpdate.length){
        if(pop >= toUpdate[i] && pop < toUpdate[i+1]){
            toUpdate.splice(i+1,0,pop);
            i = toUpdate.length;
            return toUpdate;
        }
        
        if(pop > toUpdate[i] && toUpdate[i+1] == null){
            toUpdate.splice(i+1,0,pop);
            i = toUpdate.length;
            return toUpdate;
        }
        
        if(pop <= toUpdate[i]){
            toUpdate.splice(i,0,pop)
            i = toUpdate.length;
            return toUpdate;
        }
        
        if(pop == toUpdate[i] && pop == toUpdate[i+1]){
            toUpdate.splice(i,0,pop)
            i = toUpdate.length;
            return toUpdate;
        }
        i++;
    }
}


function createLinkedList(array){
    var node1 = new link(array[0]);
    node = node1;
    
    for(var i=1;i<array.length;i++){
        var nodeTemp = new link(array[i]);
        if(node.next === null){
            node.next = nodeTemp;
        }
        
        node = nodeTemp;
    }
    
    var newLinkedList = new linkedList(node1);
    if( newLinkedList.head.val != null) return newLinkedList.head;
    else return null;
}

merge_liked_list();
