function SymmetricVoidPattern(num) {
  // for the upper half of the pattern.

  // initial spaces.
  let iniS = 0;
  for (let i = 0; i < num; i++) {
    //for printing the stars in the row.
    for (let j = 1; j <= num - i; j++) {
      process.stdout.write("*");
    }

    //for printing the spaces in the row.
    for (let j = 0; j < iniS; j++) {
      process.stdout.write(" ");
    }

    //for printing the stars in the row.
    for (let j = 1; j <= num - i; j++) {
      process.stdout.write("*");
    }

    // The spaces increase by 2 every time we hit a new row.
    iniS += 2;

    // As soon as the letters for each iteration are printed, we move to the
    // next row and give a line break otherwise all letters
    // would get printed in 1 line.
    console.log();
  }

  // for lower half of the pattern

  // initial spaces.
  iniS = 2 * num - 2;
  for (let i = 1; i <= num; i++) {
    //for printing the stars in the row.
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }

    //for printing the spaces in the row.
    for (let j = 0; j < iniS; j++) {
      process.stdout.write(" ");
    }

    //for printing the stars in the row.
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }

    // The spaces decrease by 2 every time we hit a new row.
    iniS -= 2;

    // As soon as the letters for each iteration are printed, we move to the
    // next row and give a line break otherwise all letters
    // would get printed in 1 line.
    console.log();
  }
}

SymmetricVoidPattern(5);
// OUTPUT
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********
