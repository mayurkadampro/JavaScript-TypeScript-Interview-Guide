function rightAngledTrianglePattern(num) {
  // This is the outer loop which will loop for the rows.
  for (let i = 0; i < num; i++) {
    // This is the inner loop which loops for the columns
    // no. of columns = row number for each line here.
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }

    // As soon as stars for each iteration are printed, we move to the
    // next row and give a line break otherwise all stars
    // would get printed in 1 line.
    console.log();
  }
}

rightAngledTrianglePattern(5);

// OUTPUT
// *
// * *
// * * *
// * * * *
// * * * * *
