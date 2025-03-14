function starPyramid(num) {
  // This is the outer loop which will loop for the rows.
  for (let i = 0; i < num; i++) {
    // For printing the spaces before stars in each row
    for (let j = 0; j < num - i - 1; j++) {
      process.stdout.write(" ");
    }

    // For printing the stars in each row
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }

    // For printing the spaces after the stars in each row
    for (let j = 0; j < num - i - 1; j++) {
      process.stdout.write(" ");
    }

    console.log();
  }
}

starPyramid(6);

// OUTPUT
//      *
//     ***
//    *****
//   *******
//  *********
