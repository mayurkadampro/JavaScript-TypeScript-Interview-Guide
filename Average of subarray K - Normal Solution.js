// Given an array, find the average of each subarray of ‘K’ contiguous elements in it.

let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let K = 5;

const averageSumOfSubArray = (arr, K) => {
    const result = [];
    for (let i = 0; i <= arr.length - K; i++) {
        let sum = 0.0;
        for (let j = i; j < i + K; j++) {
            sum += arr[j];
        }
        result.push(sum / K);
    }
    return result;
}

const output = averageSumOfSubArray(arr, K);
console.log(output); // [ 2.2, 2.8, 2.4, 3.6, 2.8 ]