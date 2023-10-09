class Node{
    constructor(value, parent = null, left = null, right = null){
        this.value = value;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
}

class QueueNode{
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
            this.front = this.back = new QueueNode(data);
            this.size++;
        }
        else{
            this.back.next = new QueueNode(data, null, this.back);
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
}

class BinarySearchTree{
    constructor(){
        this.root = null;
        this.numOfNodes = 0; 
    }

    Insert(value){
        if(this.numOfNodes === 0){
            this.root = new Node(value);
            this.numOfNodes++;
        }
        else{
            let trav = this.root;
            while(trav !== null){
                if(value <= trav.value){
                    if(trav.left === null){
                        trav.left = new Node(value, trav);
                        this.numOfNodes++;
                        break;
                    }
                    else{
                        trav = trav.left;
                    }
                }
                else{
                    if(trav.right === null){
                        trav.right = new Node(value, trav);
                        this.numOfNodes++;
                        break;
                    }
                    else{
                        trav = trav.right;
                    }
                }
            }
        }
    }

    Remove(value){
        let trav = this.root;
        while(trav !== null){
            if(trav.value === value){
                if(trav.left === null && trav.right === null){
                    if(trav.parent.left === trav){
                        trav.parent.left = null;
                    }
                    if(trav.parent.right === trav){
                        trav.parent.right = null;
                    }
                    trav = null;
                    this.numOfNodes--;
                    break;
                }
                else if(trav.left === null){
                    let trav2 = trav.parent;
                    if(trav2.right === trav){
                        trav2.right = trav.right;
                        trav.right.parent = trav2;
                        trav = null;
                        this.numOfNodes--;
                        break;
                    }
                    else if(trav2.left === trav){
                        trav2.left = trav.right;
                        trav.right.parent = trav2;
                        trav = null;
                        this.numOfNodes--;
                        break;
                    }
                    else if(trav.right === null){
                        let trav2 = trav.parent;
                        if(trav2.right === trav){
                            trav2.right = trav.left;
                            trav.left.parent = trav2;
                            trav = null;
                            this.numOfNodes--;
                            break;
                        }
                        else if(trav2.left === trav){
                            trav2.left = trav.left;
                            trav.left.parent = trav2;
                            trav = null;
                            this.numOfNodes--;
                            break;
                        }
                    }
                    
                }
                else{
                    let temp = trav.left;
                    while(temp.right !== null){
                        temp = temp.right;
                    }
                    trav.value = temp.value;
                    if(temp.parent.right === temp){
                        temp.parent.right = null;
                    }
                    if(temp.parent.left === temp){
                        temp.parent.left = null;
                    }
                    temp = null;
                    this.numOfNodes--;
                    break;
                }
            }else{
                if(value <= trav.value){
                    trav = trav.left;
                }
                else{
                    trav = trav.right;
                }
            }
        }
    }

    // BFS
    LevelorderPrint(){
        let trav = this.root;
        const queue = new Queue();
        if(this.numOfNodes != 0){
            queue.Insert(trav);
        }
        while(queue.GetSize() !==0){
            if(trav.left !== null){
                queue.Insert(trav.left)
            }
            if(trav.right !== null){
                queue.Insert(trav.right)
            }
            console.log(trav.value);
            queue.Remove();
            if(queue.front === null){
                break;
            }
            trav = queue.front.value;
        }
        return;
    }

    PreorderPrint(node){
        if(node === null){
            return;
        }
        console.log(node.value);
        this.PreorderPrint(node.left);
        this.PreorderPrint(node.right);
    }

    InorderPrint(node){
        if(node === null){
            return;
        }
        this.InorderPrint(node.left);
        console.log(node.value);
        this.InorderPrint(node.right);
    }

    PostorderPrint(node){
        if(node === null){
            return;
        }
        this.PostorderPrint(node.left);
        this.PostorderPrint(node.right);
        console.log(node.value);
    }
}

const bst = new BinarySearchTree();

bst.Insert(23);
bst.Insert(2);
bst.Insert(123);
bst.Insert(12);
bst.Insert(34);
bst.Insert(64);
bst.Insert(25);
bst.Insert(86);
bst.Insert(212);
bst.Remove(12);
bst.Remove(123);
bst.Remove(23);
bst.LevelorderPrint(bst.root);
console.log("Nodes: " + bst.numOfNodes)