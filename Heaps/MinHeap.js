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

    Remove(){
        let smallest = this.heap[1];
        if(this.heap.length > 2){
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length -1)
            if(this.heap.length === 3){
                if(this.heap[1] > this.heap[2]){
                    let temp = this.heap[1];
                    this.heap[1] = this.heap[2];
                    this.heap[2] = temp;
                }
                return smallest;
            }
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while(this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]){
                if(this.heap[left] <= this.heap[right]){
                    let temp = this.heap[i];
                    this.heap[i] = this.heap[left];
                    this.heap[left] = temp;
                    i = 2 * i;
                }
                else{
                    let temp = this.heap[i];
                    this.heap[i] = this.heap[right];
                    this.heap[right] = temp;
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                if(this.heap[left] === undefined || this.heap[right] === undefined){
                    break;
                }
            }
        }
        else if(this.heap.length === 2){
            this.heap.splice(1,1);
        }
        else{
            return null;
        }
        return smallest;
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
mh.Remove();
mh.Remove();
console.log(mh);
