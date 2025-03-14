// Given an array, Find the smallest contiguous subarray whose sum is greater than or equal to 'K'

let arr = [2, 1, 5, 2, 3, 2];
let K = 7;

const smallSubarraySum = (arr, K) => {
    let minSum = Infinity;
    let windowSum = 0;
    for (i = 0; i <= arr.length; i++) {
        windowSum = 0;
        for (j = i; j < i + K; j++) {
            if (arr[j]) windowSum += arr[j];
            if (windowSum >= K) {
                minSum = Math.min(minSum, j - i + 1);
                break
            };
        }
    }
    if (minSum === Infinity) {
        return 0;
    }
    return minSum;
}

const output = smallSubarraySum(arr, K);
console.log(output); // 2