var candy = function (ratings) {
  let result = new Array(ratings.length).fill(1);

  // left to right
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i - 1] < ratings[i]) {
      result[i] = result[i - 1] + 1;
    }
  }

  // right to left
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      result[i] = Math.max(result[i], result[i + 1] + 1);
    }
  }

  return result.reduce((pre, curr) => pre + curr, 0);
};

const result = candy([1, 0, 2]);
console.log(result); // 5

const result1 = candy([1, 2, 2]);
console.log(result1); // 4
