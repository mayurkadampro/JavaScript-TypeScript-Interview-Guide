// Given an array, find the maximum sum Subarray of Size K

let arr = [2, 1, 5, 1, 3, 2];
let K = 3;

const maxSubarrayOfSizeK = (arr, K) => {
    let maxSum = 0;
    let windowSum = 0;

    for (i = 0; i <= arr.length - K; i++) {
        windowSum = 0;
        for (j = i; j < i + K; j++) {
            windowSum += arr[j];
        }
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

const output = maxSubarrayOfSizeK(arr, K);
console.log(output); // 9