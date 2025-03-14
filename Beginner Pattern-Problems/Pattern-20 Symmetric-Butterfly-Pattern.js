function symmetricButterflyPattern(num) {
  // initialising the spaces.
  let spaces = 2 * num - 2;

  // Outer loop for printing row.
  for (let i = 1; i <= 2 * num - 1; i++) {
    // stars for first half
    let stars = i;

    // stars for the second half.
    if (i > num) stars = 2 * num - i;

    //for printing the stars
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("*");
    }

    //for printing the spaces
    for (let j = 1; j <= spaces; j++) {
      process.stdout.write(" ");
    }

    //for printing the stars
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("*");
    }

    // As soon as the stars for each iteration are printed, we move to the
    // next row and give a line break otherwise all stars
    // would get printed in 1 line.
    console.log();
    if (i < num) spaces -= 2;
    else spaces += 2;
  }
}

symmetricButterflyPattern(5);
// OUTPUT
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *
