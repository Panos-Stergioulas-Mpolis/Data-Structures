function hasFunction(s, tableSize){
    let hash = 17;

    for(let i = 0; i < s.length; i++){
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }

    return hash;
}

class HashTable{

    table = new Array(3);
    numOfItems = 0;

    resize =()=>{
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            if(item){
                item.forEach(([key, value])=>{
                    const idx = hasFunction(key, newTable.length)
                    if(newTable[idx]){
                        newTable[idx].push([key, value]);
                    }
                    else{
                        newTable[idx] = [[key,value]];
                    }
                })
            }
        });
        this.table = newTable;
    }

    setItem = (key, value) =>{
        this.numOfItems++;
        const ratio = this.numOfItems / this.table.length;

        if(ratio > 0.8){
            this.resize();
        }

        const idx = hasFunction(key, this.table.length);
        if(this.table[idx]){
            this.table[idx].push([key, value]);
        }
        else{
            this.table[idx] = [[key,value]];
        }
    }

    getItem = key =>{
        const idx = hasFunction(key, this.table.length);
        try{
            return this.table[idx].find(x => x[0] === key)[1];
        }
        catch{
            return `${key} does not exist.`;
        }
    }
}

const table = new HashTable();
