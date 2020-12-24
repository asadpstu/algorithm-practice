/*
  create linkedlist Dynamically from input number.
*/
class LinkNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head;
    }
}

for(var i=1;i <= 15;i++)
{   
    if(i === 1)
    {
      var node1 = new LinkNode(i);
      node = node1;   
    }
    else
    {
      var newNode = new LinkNode(i);
      node.next = newNode;
      node = newNode;  
    }
}
let newList = new LinkedList(node1);
console.log(JSON.stringify( "------------Raw--------------" ));
console.log(JSON.stringify( newList.head ));

var array = [];
if(newList.head){
    array.push(newList.head.data);
    var nextNode = newList.head.next;
    while(nextNode){
        array.push(nextNode.data);
        nextNode = nextNode.next;
    }
    
    var newNode = new LinkNode(array[array.length -1]);
    currentNode = newNode;
    for(var i=array.length - 2 ; i >= 0 ; i--)
    {
      var exploreNode = new LinkNode(array[i]);
      currentNode.next = exploreNode;
      currentNode = exploreNode;
    }
    var newLinklist = new LinkedList(newNode);
}
console.log(JSON.stringify( "------------Reverse--------------" ));
console.log(JSON.stringify(newLinklist));
