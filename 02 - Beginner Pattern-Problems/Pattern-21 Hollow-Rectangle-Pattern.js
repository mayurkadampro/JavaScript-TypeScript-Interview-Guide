function hollowRectanglePattern(num) {
  // outer loop for no. of rows.
  for (let i = 0; i < num; i++) {
    // inner loop for printing the stars at borders only.
    for (let j = 0; j < num; j++) {
      if (i === 0 || j === 0 || i === num - 1 || j === num - 1) {
        process.stdout.write("*");
      } else {
        // if not border index, print space.
        process.stdout.write(" ");
      }
    }

    // As soon as the stars for each iteration are printed, we move to the
    // next row and give a line break otherwise all stars
    // would get printed in 1 line.
    console.log();
  }
}

hollowRectanglePattern(5);
// OUTPUT
// *****
// *   *
// *   *
// *   *
// *****
