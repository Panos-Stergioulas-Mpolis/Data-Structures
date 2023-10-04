class Node{
    constructor(value, leftC = null, rightC = null, parent = null){
        this.leftC = leftC;
        this.rightC = rightC;
        this.parent = parent;
        this.value = value;
    }   
}


class MinHeap{
    constructor(){
        this.root = null;
        this.heap = [null];
        this.size = 0;
    }

    //Insert a value
    Insert(value){
        if(this.size === 0){
            this.root = new Node(value)
        }
    }
}