// https://www.geeksforgeeks.org/problems/activity-selection-1587115620/1
// https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/

const activitySelection = (start, end, n) => {
  let count = 1;
  let arr = [];
  for (let i = 0; i < start.length; i++) {
    arr.push([start[i], end[i]]);
  }

  arr.sort((a, b) => a[1] - b[1]);

  let last = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] > last) {
      count++;
      last = arr[i][1];
    }
  }
  return count;
};

console.log(activitySelection([1, 3, 2, 5], [2, 4, 3, 6], 4));
