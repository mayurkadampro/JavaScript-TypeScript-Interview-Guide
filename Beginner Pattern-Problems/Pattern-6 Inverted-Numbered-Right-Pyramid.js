function invertedRightPyramid(num) {
  // This is the outer loop which will loop for the rows.
  for (let i = 0; i < num; i++) {
    // This is the inner loop which loops for the columns
    // no. of columns = (N - row index) for each line here
    // as we have to print an inverted pyramid.
    // (N-j) will give us the numbers in a row starting from 1 to N-i.
    for (let j = num; j > i; j--) {
      process.stdout.write(num - j + 1 + " ");
    }

    // As soon as numbers for each iteration are printed, we move to the
    // next row and give a line break otherwise all numbers
    // would get printed in 1 line.
    console.log();
  }
}

invertedRightPyramid(5);

// OUTPUT
//   1 2 3 4 5
//   1 2 3 4
//   1 2 3
//   1 2
//   1
