const arr = [1, [2, [3], [[4], 5]]];

// BUILD IN METHOD
const oneLevelFlat = arr.flat(1);
console.log(oneLevelFlat); // [ 1, 2, [ 3 ], [ [ 4 ], 5 ] ]

const twoLevelFlat = arr.flat(2);
console.log(twoLevelFlat); // [ 1, 2, 3, [ 4 ], 5 ]

const deepFlat = arr.flat(Infinity);
console.log(deepFlat); // [ 1, 2, 3, 4, 5 ]

// ================================================================================================ //
// Wihtout using any build method we can solve by recursion
const deeplyFlat = (inputArray, tempArray = []) => {
  // base case
  if (!Array.isArray(inputArray)) {
    tempArray.push(inputArray);
    return;
  }

  for (let i = 0; i < inputArray.length; i++) {
    deeplyFlat(inputArray[i], tempArray);
  }
  return tempArray;
};

const deeplyFlat2 = (inputArray, tempArray = []) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      deeplyFlat2(inputArray[i], tempArray);
    } else {
      tempArray.push(inputArray[i]);
    }
  }
  return tempArray;
};

const customFun = deeplyFlat(arr);
console.log(customFun); // [ 1, 2, 3, 4, 5 ]

const customFun2 = deeplyFlat2(arr);
console.log(customFun2); // [ 1, 2, 3, 4, 5 ]

// ================================================================================================== //

// Flatten Deeply Nested Array
// https://leetcode.com/problems/flatten-deeply-nested-array/description/

const flat = (inputArray, n, tempArray = []) => {
  // base case
  if (!Array.isArray(inputArray) || n <= -1) {
    tempArray.push(inputArray);
    return;
  }

  for (let i = 0; i < inputArray.length; i++) {
    flat(inputArray[i], n - 1, tempArray);
  }
  return tempArray;
};

const flat2 = (inputArray, n, tempArray = []) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i]) && n > 0) {
      flat2(inputArray[i], n - 1, tempArray);
    } else {
      tempArray.push(inputArray[i]);
    }
  }
  return tempArray;
};

const output = flat(
  [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
  1
);
console.log(output); // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ], 12, 13, 14, 15 ]

const output2 = flat2(
  [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
  1
);
console.log(output2); // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ], 12, 13, 14, 15 ]
