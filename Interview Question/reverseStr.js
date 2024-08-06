const reverseStr = (s) => {
  let idx = s.length - 1;
  return helper(s, idx);
};

const helper = (s, idx) => {
  if (idx === 0) {
    return s[idx];
  }

  return s[idx] + helper(s, idx - 1);
};

const output = reverseStr("Hello there");
console.log(output);
