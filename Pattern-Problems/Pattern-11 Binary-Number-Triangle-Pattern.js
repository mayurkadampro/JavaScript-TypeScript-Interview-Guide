function binaryNumberTrianglePattern(num) {
  // First row starts by printing a single 1.
  let start = 1;

  // Outer loop for the no. of rows
  for (let i = 0; i < num; i++) {
    // if the row index is even then 1 is printed first
    // in that row.
    // if odd, then the first 0 will be printed in that row.
    if (i % 2 === 0) {
      start = 1;
    } else {
      start = 0;
    }

    // We alternatively print 1's and 0's in each row by using
    // the inner for loop.
    for (let j = 0; j <= i; j++) {
      process.stdout.write(start + "");
      start = 1 - start;
    }

    // As soon as the numbers for each iteration are printed, we move to the
    // next row and give a line break otherwise all numbers
    // would get printed in 1 line.
    console.log();
  }
}

binaryNumberTrianglePattern(5);

// OUTPUT
// 1
// 01
// 101
// 0101
// 10101
