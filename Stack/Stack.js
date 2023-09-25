'use-strict'

class Node{
    constructor(value, next = null, prev = null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.top = null;
        this.size = 0;
    }

    // Return the size of the list
    GetSize(){
        return this.size;
    }

    // Pushes an element to the top of tge stack
    Push(data){
        if(this.size === 0){
            this.head = this.top = new Node(data)
            this.size++;
        }
        else{
            this.top.next = new Node(data, null, this.top);
            this.top = this.top.next;
            this.size++;
        }
    }

    // Removes an element from the top of the stack
    Pop(){
        if(this.size === 0){
            console.log("The stack is empty");
        }
        else if(this.size === 1){
            this.head = this.top = null;
            this.size--;
        }
        else{
            this.top = this.top.prev;
            this.top.next = null;
            this.size--;
        }
    }

    // Print the stack
    PrintStack(){
        if(this.size === 0){
            console.log("The stack is empty");
        }
        else if(this.size === 1){
            console.log(`index 0: value: ${this.head.value} / prev: ${this.head.prev} / next: ${this.head.next}`);
        }
        else{
            let i = 0;
            let trav = this.head;
            while(trav !== null){
                console.log(`index ${i}: value: ${trav.value} / prev: ${trav.prev === null?"null":trav.prev.value} / next: ${trav.next === null?"null":trav.next.value}`);
                trav = trav.next;
                i++;
            };
        }
    }
}

const ll = new Stack();
ll.PrintStack();
console.log(ll)