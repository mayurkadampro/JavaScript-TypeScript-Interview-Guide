const arr = [1,2,3,4];

const result = arr.map((item, index, existingArr) => {
    return item * 3;
});

console.log(result);

Array.prototype.myMap = function(callBack) {
    const temp = [];
    for(let i=0; i<this.length; i++){
        temp.push(callBack(this[i], i, this));
    }
    return temp;
}

const result1 = arr.myMap((item, index, existingArr) => {
    return item * 3;
});


console.log(result1);