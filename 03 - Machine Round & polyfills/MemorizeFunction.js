const val = (num1, num2) => {
    for(let i=0; i<1000000000; i++){    }
    return num1 * num2;
}

const MemorizeFunc = (func, context) => {
    const memo = {};
    return (...args) => {
        let key = JSON.stringify(args);
        if(!memo[key]){
            memo[key] = func.call(context || this, ...args);
        }
        return memo[key];
    }
}



console.time("First call");
console.log(val(25, 35));
console.timeEnd("First call");

console.time("Second call");
console.log(val(25, 35));
console.timeEnd("Second call");

const improveFunc = MemorizeFunc(val);

console.time("First call");
console.log(improveFunc(25, 35));
console.timeEnd("First call");

console.time("Second call");
console.log(improveFunc(25, 35));
console.timeEnd("Second call");