// Question - https://leetcode.com/problems/design-linked-list/description/

// Node class to represent a node in the linked list
class Node {
    constructor(val, next = null) {
        // Store the value and set next pointer to null
        this.val = val;
        this.next = next;
    }
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    // If the index is out of bounds, return -1
    if (index < 0 || index >= this.size) return -1;


    // Start from the head of the list
    let current = this.head;

    // Traverse the list to find the node at the given index
    for (let i = 0; i < index; i++) {
        current = current.next;
    }

    // Return the value at the current node
    return current.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    // Create a new node with the given value
    const newNode = new Node(val);

    // Set the new node's next pointer to the current head
    newNode.next = this.head;

    // Update the head to point to the new node
    this.head = newNode;

    // Increment the size of the list
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    // Create a new node with the given value
    const newNode = new Node(val);

    // If the list is empty, set the new node as the head
    if (this.head === null) {
        this.head = newNode;
    } else {
        // Otherwise, traverse to the end of the list
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        // Set the last node's next pointer to the new node
        current.next = newNode;
    }

    // Increment the size of the list
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    // If the index is out of bounds, do nothing
    if (index < 0 || index > this.size) return;

    // If the index is 0, add the node at the head
    if (index === 0) {
        this.addAtHead(val);
    } else {
        // Otherwise, traverse to the node just before the specified index
        const newNode = new Node(val);
        let current = this.head;

        // Traverse to the node just before the index
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        // Set the new node's next pointer to the current node's next
        newNode.next = current.next;

        // Link the current node to the new node
        current.next = newNode;

        // Increment the size of the list
        this.size++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    // If the index is out of bounds, do nothing
    if (index < 0 || index >= this.size) return;

    // If the index is 0, delete the head node
    if (index === 0) {
        this.head = this.head.next;
    } else {
        // Otherwise, traverse to the node just before the one to delete
        let current = this.head;

        // Traverse to the node just before the index
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        // Set the current node's next pointer to the node after the one to delete
        current.next = current.next.next;
    }

    // Decrement the size of the list
    this.size--;
};

// Time complexity:

// get(index): O(n)
// addAtHead(val): O(1)
// addAtTail(val): O(n)
// addAtIndex(index, val): O(n)
// deleteAtIndex(index): O(n)

// Space complexity: O(n)