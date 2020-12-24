/*
  create linkedlist Manually
*/

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode(0)
let node2 = new ListNode(1)
let node3 = new ListNode(2)
node1.next = node2;
node2.next = node3;

//add new linkedNode
let node4 = new ListNode(3);
node3.next = node4;

let node5 = new ListNode(4);
node4.next = node5;

let newList = new LinkedList(node1);
console.log(JSON.stringify( newList.head ));
