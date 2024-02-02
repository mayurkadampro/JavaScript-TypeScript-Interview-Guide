function halfDiamondStarPattern(num) {
  // Outer loop for number of rows.
  for (let i = 1; i <= 2 * num - 1; i++) {
    // stars would be equal to the row no. uptill first half
    let stars = i;

    // for the second half of the rotated triangle.
    if (i > num) stars = 2 * num - i;

    // for printing the stars in each row.
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("*");
    }

    // As soon as the stars for each iteration are printed, we move to the
    // next row and give a line break otherwise all stars
    // would get printed in 1 line.
    console.log();
  }
}

halfDiamondStarPattern(5);
// OUTPUT
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
