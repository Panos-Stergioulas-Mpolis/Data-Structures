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

    // Remove(value){
    //     let trav = this.root;
    //     while(trav !== null){
    //         if(trav.value === value){
    //             if(trav.left === null && trav.right === null){
    //                 trav = null;
    //                 this.numOfNodes--;
    //                 break;
    //             }
    //             else if(trav.left === null){
    //                 trav.parent.right = trav.right;
    //                 trav.right.parent = trav.parent;
    //                 trav = null;
    //                 this.numOfNodes--;
    //             }
    //             else if(trav.right === null){

    //             }
    //         }
    //     }
    // }

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
bst.PostorderPrint(bst.root);