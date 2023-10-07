class Node{
    constructor(value, parent = null, left = null, right = null){
        this.value = value;
        this.parent = parent;
        this.left = left;
        this.right = right;
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
}

const bst = new BinarySearchTree();

bst.Insert(3);
bst.Insert(4);
bst.Insert(1);

console.log(bst);