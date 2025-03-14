function reactangleStarPattern(num) {
  // This is the outer loop which will loop for the rows.
  for (let i = 0; i < num; i++) {
    // This is the inner loop which here, loops for the columns
    for (let j = 0; j < num; j++) {
      process.stdout.write("* ");
    }

    // As soon as N stars are printed, we move to the
    // next row and give a line break otherwise all stars
    // would get printed in 1 line.
    console.log();
  }
}

reactangleStarPattern(5);

// Output
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
