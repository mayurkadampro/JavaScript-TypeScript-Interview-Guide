// we have the length, breadth, and height of a cuboid and we want to construct a function that can calculate the volume.
function calculateVolume(length, breadth, height) {
  console.log(length * breadth * height);
}

calculateVolume(4, 5, 6); // 120

// if we convert above function into currying function than it will be
function calculateVolumeCurry(length) {
  return function (breadth) {
    return function (height) {
      console.log(length * breadth * height);
    };
  };
}

calculateVolumeCurry(4)(5)(6); // 120

// LeetCode https://leetcode.com/problems/curry/description/
// Video Soln - https://www.youtube.com/watch?v=YnvIObEO3nU
function curry(fn) {
  let result = [];
  return function curried(...args) {
    result.push(...args);
    if (result.length < fn.length) {
      return curried;
    }
    return fn(...result);
  };
}

function sum(a, b) {
  return a + b;
}

const csum = curry(sum);
console.log(csum(1)(2)); // 3
