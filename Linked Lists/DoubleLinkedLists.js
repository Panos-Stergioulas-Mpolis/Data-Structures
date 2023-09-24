class Node{
    constructor(value, next = null, prev = null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleLinkedList{
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
            this.size++;
        }
        else{
            this.head.prev = new Node(data, this.head);
            this.head = this.head.prev;
            this.size++;
        }
    }

    // Add an element at the end of the list
    InsertLast(data){
        if(this.size === 0){
            this.head = this.tail = new Node(data);
            this.size++;
        }
        else{
            this.tail.next = new Node(data, null, this.tail);
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
            console.log(`index 0: ${this.head.value}`);
        }
        else{
            let i = 0;
            let trav = this.head;
            while(trav !== null){
                console.log(`index ${i}: ${trav.value}`);
                trav = trav.next;
                i++;
            };
        }
    }

    // Remove the first element
    RemoveFirst(){
        if(this.size === 0){
            console.log("The list is empty");
        }
        else if(this.size === 1){
            this.head = this.tail = null;
            this.size--;
        }
        else{
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
        }
    }

    // Remove the last element
    RemoveLast(){
        if(this.size === 0){
            console.log("The list is empty");
        }
        else if(this.size === 1){
            this.head = this.tail = null;
            this.size--;
        }
        else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
        }
    }

    // Insert at index (head = 0)
    InsertAt(index, data){
        
    }

    // Remove at index (head = 0)
    RemoveAt(index){
        
    }

    // Removes all the nodes of the list
    Clear(){
        this.head = this.tail = null;
        this.size = 0;
    }
}

const ll = new DoubleLinkedList();
ll.InsertFirst(0);
ll.InsertFirst(1);
ll.InsertFirst(2);
ll.InsertLast(3);
ll.InsertLast(4);
ll.RemoveFirst();
ll.RemoveLast();
ll.PrintList();
console.log(ll);