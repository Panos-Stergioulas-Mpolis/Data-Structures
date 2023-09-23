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
            console.log("The lis is empty");
        }
        else if(this.size === 1){
            console.log(this.head.value);
        }
        else{
            let trav = this.head;
            while(trav !== null){
                console.log(trav.value);
                trav = trav.next;
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
}

const ll = new LinkedList();
ll.InsertFirst(100);
ll.InsertLast(200);
ll.InsertLast(300);
ll.RemoveLast();
ll.RemoveLast();
ll.RemoveLast();
ll.InsertLast(300);
ll.RemoveFirst();
ll.PrintList();
console.log(ll);