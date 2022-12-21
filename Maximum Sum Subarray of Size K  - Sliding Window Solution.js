// Given an array, find the maximum sum Subarray of Size K

let arr = [2, 1, 5, 1, 3, 2];
let K = 3;

const maxSubarrayOfSizeK = (arr, K) => {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;

    for (window_end = 0; window_end < arr.length; window_end++) {
        windowSum += arr[window_end]; 
        if (window_end >= K - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart];
            windowStart += 1; 
        }
    }
    return maxSum;
}

const output = maxSubarrayOfSizeK(arr, K);
console.log(output); // 9