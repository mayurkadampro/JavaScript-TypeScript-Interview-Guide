function NumberToBinary(n) {
  // Handle special case when input is 0
  if (n === 0) return "0";

  // Initialize result string
  let binaryCode = "";

  // Continue until quotient is 1
  while (n !== 1) {
    // Append remainder to result
    binaryCode = Math.abs(n % -2).toString() + binaryCode;

    // Update quotient for the next iteration
    n = Math.ceil(n / -2);
  }

  // Append the final '1' to the result
  binaryCode = "1" + binaryCode;

  return binaryCode;
}

function baseNeg2(n) {
    // base case for special inputs
    if (n === 0) return "0";
    if (n === 1) return "1";

    let ans = baseNeg2(Math.ceil(n / -2));
    let reminder = Math.abs(n % -2).toString();

    reminder = ans + "" + reminder;
    return reminder;
}

console.log(baseNeg2(3));
