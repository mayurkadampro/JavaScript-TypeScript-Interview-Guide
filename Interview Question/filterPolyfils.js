const arr = [1, 2, 3, 4, 5];

const result = arr.filter((item, index, existingArr) => {
    return item > 3;
});

console.log(result);


Array.prototype.myFilter = function(callBack){
    const temp = [];
    for(let i=0; i<this.length; i++){
        if(callBack(this[i], i, this)){
            temp.push(this[i])
        }
        
    }
    return temp;
}

const result1 = arr.myFilter((item, index, existingArr) => {
    return item > 3;
});

console.log(result1);