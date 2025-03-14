function diamondStarPattern(num) {
  starPyramid(num);
  InvertedStarPyramid(num);
}

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

diamondStarPattern(6);

// OUTPUT
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
