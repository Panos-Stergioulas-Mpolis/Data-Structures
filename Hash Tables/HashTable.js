function hasFunction(s, tableSize){
    let hash = 17;

    for(let i = 0; i < s.length; i++){
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }

    return hash;
}

class HashTable{

    table = new Array(3);

    setItem = (key, value) =>{
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

table.setItem("first name", "bob");
table.setItem("last name", "fir");
table.setItem("kids", 4);
table.setItem("grand kids", 6);
console.log(table.getItem("first name"));
console.log(table.getItem("last name"));
console.log(table.getItem("kids"));
console.log(table.getItem("grand kids"));
console.log(table.getItem("age"));
