function InvertedStarPyramid(num) {
  // This is the outer loop which will loop for the rows.
  for (let i = 0; i < num; i++) {
    // For printing the spaces before stars in each row
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }

    // For printing the stars in each row
    for (let j = 0; j < 2 * num - (2 * i + 1); j++) {
      process.stdout.write("*");
    }

    // For printing the spaces after the stars in each row
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }

    console.log();
  }
}

InvertedStarPyramid(6);

// OUTPUT
// *********
//  *******
//   *****
//    ***
//     *
