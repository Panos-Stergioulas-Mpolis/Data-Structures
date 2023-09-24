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
            console.log(`index 0: ${this.head.value} / prev: ${this.head.prev} / next: ${this.head.next}`);
        }
        else{
            let i = 0;
            let trav = this.head;
            while(trav !== null){
                console.log(`index ${i}: ${trav.value} / prev: ${trav.prev === null?"null":trav.prev.value} / next:${trav.next === null?"null":trav.next.value}`);
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
        if(index < 0 || index > this.size){
            console.log("Not valid index.")
        }
        else if(index === 0){
            this.InsertFirst(data);
        }
        else if(index === this.size){
            this.InsertLast(data);
            console.log("hi");
        }
        else{
            let trav = this.head;
            for(let i = 0; i < this.size; i++){
                if((i+1) === index){
                    let node = new Node(data, trav.next, trav);
                    trav.next = node;
                    node.next.prev = node;
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
            let trav = this.head;
            for(let i = 0; i < this.size; i++){
                if((i) === index){
                    trav.prev.next = trav.next;
                    trav.next.prev = trav.prev;
                    trav = null;
                    this.size--;
                    break;
                }
                trav = trav.next;
            }
        }
    }

    // Removes all the nodes of the list
    Clear(){
        this.head = this.tail = null;
        this.size = 0;
    }
}

const ll = new DoubleLinkedList();
ll.PrintList();
console.log(ll)