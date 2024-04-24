// REF - https://leetcode.com/discuss/interview-question/1526322/intuit-online-test
// https://www.geeksforgeeks.org/minimize-maxai-bj-ck-minai-bj-ck-three-different-sorted-arrays/

const minOfThreeSortedArray = (arr1, arr2, arr3) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let li = arr1.length - 1;
  let lj = arr2.length - 1;
  let lk = arr3.length - 1;

  let ans = Number.POSITIVE_INFINITY;

  while (i <= li && j <= lj && k <= lk) {
    let minDiff = Math.max(
      Math.abs(arr1[i] - arr2[j]),
      Math.abs(arr2[j] - arr3[k]),
      Math.abs(arr3[k] - arr1[i])
    );

    if (minDiff < ans) {
      ans = minDiff;
    }

    if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
      i++;
    } else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
      j++;
    } else {
      k++;
    }
  }

  return ans;
};

const output = minOfThreeSortedArray(
  [1, 4, 5, 8, 10],
  [6, 9, 15],
  [2, 3, 6, 6]
);
console.log(output);

const output1 = minOfThreeSortedArray(
  [5, 8, 10, 15],
  [6, 9, 15, 78, 89],
  [2, 3, 6, 6, 8, 8, 10]
);
console.log(output1);

const output3 = minOfThreeSortedArray(
  [1],
  [1],
  [2]
);
console.log(output3);
