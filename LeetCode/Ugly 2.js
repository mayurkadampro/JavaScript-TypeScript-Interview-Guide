const nthUglyNumber = (n) => {
  let result = [1];
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  while (result.length !== n) {
    let c2 = result[i2] * 2;
    let c3 = result[i3] * 3;
    let c5 = result[i5] * 5;

    // In c2,c3,c5 we now have 3 candidates for the next number. Pick the lowest one, to record in order
    let next = Math.min(c2, c3, c5);
    result.push(next);

    if (next === c2) {
      i2++;
    }
    if (next === c3) {
      i3++;
    }
    if (next === c5) {
      i5++;
    }
  }

  return result[n - 1];
};

// Brute Force
// const nthUglyNumber = function (n) {
//   let result = [1];
//   let increment = 2;
//   while (result.length !== n) {
//     if (isUgly(increment)) {
//       result.push(increment);
//     }
//     increment++;
//   }
//   return result[n - 1];
// };

// const isUgly = function (n) {
//   if (n <= 0) return false;
//   if (n == 1) return true;

//   while (n != 1) {
//     if (n % 2 === 0) {
//       n /= 2;
//     } else if (n % 3 === 0) {
//       n /= 3;
//     } else if (n % 5 === 0) {
//       n /= 5;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

const output = nthUglyNumber(10);
console.log(output);

const output1 = nthUglyNumber(1407);
console.log(output1);
