// Stacks

// Stacks are a data structure that follows the LIFO (Last In First Out) principle.
// This means that the last element added to the stack will be the first element removed from the stack.
// Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
// They are not a built in data structure in JavaScript, but are relatively simple to implement.

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Create a stack class
class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    // peek
    peek() {
        return this.top;
    }
    // push
    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    // pop
    pop() {
        if(!this.top) {
            return null;
        }
        if(this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
    // isEmpty
    isEmpty() {
        if(this.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.peek();