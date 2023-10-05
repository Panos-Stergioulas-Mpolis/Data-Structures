// left child: 2i
// right child: 2i + 1 
//parent: Math.floor(2i/2)

class MinHeap{
    constructor(){
        this.heap = [null];
    }

    Insert(value){
        this.heap.push(value);
        if(this.heap.length > 2){
            let idx = this.heap.length - 1;
            while(this.heap[idx] < this.heap[Math.floor(idx/2)]){
                if(idx >= 1){
                    let temp = this.heap[Math.floor(idx/2)];
                    this.heap[Math.floor(idx/2)] = this.heap[idx];
                    this.heap[idx] = temp;
                    if(Math.floor(idx/2) > 1){
                        idx = Math.floor(idx/2);
                    }else{
                        break;
                    }
                }
            }
        }
    }

}

const mh = new MinHeap();



mh.Insert(4);
mh.Insert(6);
mh.Insert(8);
mh.Insert(10);
mh.Insert(5);
mh.Insert(3);
mh.Insert(16);
mh.Insert(2);
console.log(mh);
