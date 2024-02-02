function alphaHillPattern(num) {
  // Outer loop for the number of rows.
  for (let i = 0; i < num; i++) {
    // for printing the spaces.
    for (let j = 0; j < num - i - 1; j++) {
      process.stdout.write(" ");
    }

    // for printing the characters.
    let ch = 65;
    let breakpoint = (2 * i + 1) / 2;
    for (let j = 1; j <= 2 * i + 1; j++) {
      process.stdout.write(String.fromCharCode(ch) + "");
      if (j <= breakpoint) ch++;
      else ch--;
    }

    // for printing the spaces again after characters.
    for (let j = 0; j < num - i - 1; j++) {
      process.stdout.write(" ");
    }

    // As soon as the letters for each iteration are printed, we move to the
    // next row and give a line break otherwise all letters
    // would get printed in 1 line.
    console.log();
  }
}

alphaHillPattern(5);
// OUTPUT
//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
