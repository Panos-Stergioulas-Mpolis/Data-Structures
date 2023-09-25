class Node{
    constructor(value, next = null, prev = null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    // Return the size of the queue
    GetSize(){
        return this.size;
    }

    // Adds an element at the back of the queue
    Insert(data){
        if(this.size === 0){
            this.front = this.back = new Node(data);
            this.size++;
        }
        else{
            this.back.next = new Node(data, null, this.back);
            this.back = this.back.next;
            this.size++;
        }
    }

    // Removes an element from the dront of the queue
    Remove(){
        if(this.size === 0){
            console.log("The queue is empty");
        }
        else if(this.size === 1){
            this.front = this.back = null;
            this.size--;
        }
        else{
            this.front = this.front.next;
            this.front.prev = null;
            this.size--;
        }
    }

     // Print the queue
     PrintQueue(){
        if(this.size === 0){
            console.log("The queue is empty");
        }
        else if(this.size === 1){
            console.log(`index 0: ${this.front.value} / prev: ${this.front.prev} / next: ${this.front.next}`);
        }
        else{
            let i = 0;
            let trav = this.front;
            while(trav !== null){
                console.log(`index ${i}: ${trav.value} / prev: ${trav.prev === null?"null":trav.prev.value} / next:${trav.next === null?"null":trav.next.value}`);
                trav = trav.next;
                i++;
            };
        }
    }

}

const ll = new Queue();
ll.PrintQueue();
console.log(ll)