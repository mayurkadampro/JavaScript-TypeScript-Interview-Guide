function invertedRightPyramid(num) {
  // This is the outer loop which will loop for the rows.
  for (let i = num; i > 0; i--) {
    // This is the inner loop which loops for the columns
    for (let j = i; j > 0; j--) {
      process.stdout.write("* ");
    }

    // As soon as stars for each iteration are printed, we move to the
    // next row and give a line break otherwise all stars
    // would get printed in 1 line.
    console.log();
  }
}

invertedRightPyramid(5);

// OUTPUT
// * * * * *
// * * * *
// * * *
// * *
// *
