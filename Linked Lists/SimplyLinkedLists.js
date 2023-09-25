'use-strict'

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Return the size of the list
    GetSize(){
        return this.size;
    }

    // Add an element at the start of the list
    InsertFirst(data){
        if(this.size === 0){
            this.head = this.tail = new Node(data);
            this.size = 1;
        }
        else{
            this.head = new Node(data, this.head)
            this.size++;
        }
    }

    // Add an element at the end of the list
    InsertLast(data){
        if(this.size === 0){
            this.head = this.tail = new Node(data);
            this.size = 1;
        }
        else{
            this.tail.next = new Node(data)
            this.tail = this.tail.next;
            this.size++;
        }
    }

    // Print the list
    PrintList(){
        if(this.size === 0){
            console.log("The list is empty");
        }
        else if(this.size === 1){
            console.log(`index 0: ${this.head.value} / next: ${this.head.next}`);
        }
        else{
            let i = 0;
            let trav = this.head;
            while(trav !== null){
                console.log(`index ${i}: ${trav.value} / next:${trav.next === null?"null":trav.next.value}`);
                trav = trav.next;
                i++;
            };
        }
    }

    // Remove the first element
    RemoveFirst(){
        if(this.size !== 0){
            this.head = this.head.next;
            this.size--;

            if(this.size === 0){
                this.tail = null;
            }
        }
        else{
            console.log("The list is empty");
        }
    }

    // Remove the last element
    RemoveLast(){
        if(this.size === 0){
            console.log("The list is empty");
        }
        else if(this.size === 1){
            this.head = this.tail = null;
            this.size = 0;
        }
        else{
            let trav = this.head;
            for(let i = 0; i < this.size - 2; i++){
                trav = trav.next;
            }
            this.tail = trav;
            this.tail.next = null;
            this.size--;
        }
        
    }

    // Insert at index (head = 0)
    InsertAt(index, data){
        if(index < 0 || index > this.size){
            console.log("Not valid index.")
        }
        else if(index === 0){
            this.InsertFirst(data);
        }
        else if(index === this.size){
            this.InsertLast(data);
        }
        else{
            let trav = this.head;
            
            for(let i = 0; i < this.size; i++){
                if((i+1) === index){
                    let node = new Node(data, trav.next)
                    trav.next = node;
                    this.size++;
                    break;
                }
                trav = trav.next;
            }
        }
    }

    // Remove at index (head = 0)
    RemoveAt(index){
        if(index < 0 || index > this.size - 1){
            console.log("Not valid index.")
        }
        else if(index === 0){
            this.RemoveFirst();
        }
        else if(index === this.size - 1){
            this.RemoveLast();
        }
        else{
            let trav1 = this.head;
            let trav2 = trav1.next;
            
            for(let i = 0; i < this.size - 1; i++){
                if((i+1) === index){
                    trav1.next = trav2.next;
                    this.size--;
                    trav2 = null;
                    break;
                }
                trav1 = trav2;
                trav2 = trav1.next;
            }
        }
    }

    // Removes all the nodes of the list
    Clear(){
        this.head = this.tail = null;
        this.size = 0;
    }
}

const ll = new LinkedList();
ll.PrintList();
console.log(ll);
