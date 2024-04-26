// JavaScript:
const letters = ["a", "b", "c", "d", "e"];
console.log(letters[0]); // => 'a'
console.log(letters[2]); // => 'c'
console.log(letters[-1]); // => undefined

const proxy = new Proxy(letters, {
  get(target, prop) {
    if (prop < 0) {
      prop = parseInt(prop, 10);
      prop += target.length;
    }
    return target[prop];
  },
});

console.log(proxy[0]); // => 'a'
console.log(proxy[2]); // => 'c'
console.log(proxy[-1]); // => 'e'
console.log(proxy[-2]); // => 'd'
console.log(proxy[-3]); // => 'c'

// ======================================================================================= //

// Custom function
const returnNegativeIndexValue = (inputArray, index) => {
  if (index < 0) {
    index += inputArray.length; // index = index + inputArray.length
  }
  return inputArray[index];
};

console.log(returnNegativeIndexValue(letters, 0)); // => 'a'
console.log(returnNegativeIndexValue(letters, 2)); // => 'c'
console.log(returnNegativeIndexValue(letters, -1)); // => 'e'
console.log(returnNegativeIndexValue(letters, -2)); // => 'd'
console.log(returnNegativeIndexValue(letters, -3)); // => 'c'
