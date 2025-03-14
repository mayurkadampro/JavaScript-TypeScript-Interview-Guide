const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, curr, index, existingArr) => {
  return acc + curr;
});

const sum1 = arr.reduce((acc, curr, index, existingArr) => {
  return acc + curr;
}, 0);

console.log(sum);
console.log(sum1);

Array.prototype.myReducer = function (callBack, initialValue) {
  let accumultor = initialValue;
  for (let i = 0; i < this.length; i++) {
    if(accumultor){
        accumultor = callBack(accumultor, this[i], i, this);
    }else{
        accumultor = this[i];
    }

   
  }
  return accumultor;
};

const sum2 = arr.myReducer((acc, curr, index, existingArr) => {
  return acc + curr;
});

const sum3 = arr.myReducer((acc, curr, index, existingArr) => {
  return acc + curr;
}, 0);

console.log(sum2);
console.log(sum3);
