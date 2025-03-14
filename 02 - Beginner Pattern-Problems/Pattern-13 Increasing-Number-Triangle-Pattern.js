function IncreasingNumberTrianglePattern(num) {
  // starting number.
  let logNum = 1;

  // Outer loop for the number of rows.
  for (let i = 1; i <= num; i++) {
    // Inner loop will loop for i times and
    // print numbers increasing by 1 each time.
    for (let j = 1; j <= i; j++) {
      process.stdout.write(logNum + " ");
      logNum += 1;
    }
    // As soon as the numbers for each iteration are printed, we move to the
    // next row and give a line break otherwise all numbers
    // would get printed in 1 line.
    console.log();
  }
}

IncreasingNumberTrianglePattern(5);

// OUTPUT
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
