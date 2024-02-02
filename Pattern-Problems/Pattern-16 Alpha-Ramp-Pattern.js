function alphaRampPattern(num) {
  // Outer loop for the number of rows.
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      // same char which is defined
      // is to be printed i times in that row.
      process.stdout.write(String.fromCharCode(65 + i) + " ");
    }
    // As soon as the letters for each iteration are printed, we move to the
    // next row and give a line break otherwise all letters
    // would get printed in 1 line.
    console.log();
  }
}

alphaRampPattern(5);
// OUTPUT
// A
// B B
// C C C
// D D D D
// E E E E E
