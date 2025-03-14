// Given an array, find the average of each subarray of ‘K’ contiguous elements in it.

let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let K = 5;

const averageSumOfSubArray = (arr, K) => {
    const result = [];
    let windowSum = 0.0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if (windowEnd >= K - 1) {
            result.push(windowSum / K);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return result;
}

const output = averageSumOfSubArray(arr, K);
console.log(output); // [ 2.2, 2.8, 2.4, 3.6, 2.8 ]