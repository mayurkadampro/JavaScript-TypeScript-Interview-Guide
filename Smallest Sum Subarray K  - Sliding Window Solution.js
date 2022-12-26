// Given an array, Find the smallest contiguous subarray whose sum is greater than or equal to 'K'

let arr = [2, 1, 5, 2, 3, 2];
let K = 7;

const smallSubarraySum = (arr, K) => {
    let windowSum = 0;
    let minLength = Infinity;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; 
        while (windowSum >= K) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }

    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
}

const output = smallSubarraySum(arr, K);
console.log(output); // 2