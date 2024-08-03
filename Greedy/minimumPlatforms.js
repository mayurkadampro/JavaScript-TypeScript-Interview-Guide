// https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1
// https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/

const findPlatform = (arr, dep, n) => {
  // Create an array to store arrival and departure times
  const arr2 = new Array(n);

  // Store the arrival and departure time
  for (let i = 0; i < n; i++) {
    arr2[i] = { arr: arr[i], dep: dep[i] };
  }

  // Sort the array of arrival and departure times based on the arrival time
  arr2.sort((a, b) => a.arr - b.arr);

  // Initialize a priority queue to keep track of the platforms in use
  const p = [];
  let count = 1;
  p.push(arr2[0].dep);

  // Loop through the array of arrival and departure times
  for (let i = 1; i < n; i++) {
    // Check if the next train can use an existing platform
    if (p[0] <= arr2[i].arr) {
      // If so, remove the departure time of the previous train from the priority queue
      p.shift();
    } else {
      // Otherwise, increment the platform count
      count++;
    }

    // Add the departure time of the current train to the priority queue
    p.push(arr2[i].dep);
    // Sort the priority queue
    p.sort();
  }

  // Return the number of platforms required
  return count;
};

let output = findPlatform(
  [900, 940, 950, 1100, 1500, 1800],
  [910, 1200, 1120, 1130, 1900, 2000],
  6
);
console.log(output);

// Alternate Solution

const findPlatformForTrain = (arr, dep, n) => {
  // Sort arrival and
  // departure arrays
  arr = arr.sort((a, b) => a - b);
  dep = dep.sort((a, b) => a - b);

  // plat_needed indicates
  // number of platforms
  // needed at a time
  let plat_needed = 1;
  let result = 1;
  let i = 1;
  let j = 0;

  // Similar to merge in
  // merge sort to process
  // all events in sorted order
  while (i < n && j < n) {
    // If next event in sorted
    // order is arrival, increment
    // count of platforms needed
    if (arr[i] <= dep[j]) {
      plat_needed++;
      i++;
    }

    // Else decrement count
    // of platforms needed
    else if (arr[i] > dep[j]) {
      plat_needed--;
      j++;
    }

    // Update result if needed
    if (plat_needed > result) result = plat_needed;
  }

  return result;
};

const output1 = findPlatformForTrain(
  [900, 940, 950, 1100, 1500, 1800],
  [910, 1200, 1120, 1130, 1900, 2000],
  6
);

console.log(output1);
