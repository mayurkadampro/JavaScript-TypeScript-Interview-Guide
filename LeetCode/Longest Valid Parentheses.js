const longestValidParentheses = function (S) {
  let stack = [];
  let count = 0;
  let validStartIndex = -1;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      stack.push(i);
    } else if (S[i] === ")") {
      if (stack.length === 0) {
        validStartIndex = i;
      } else {
        stack.pop();
        if (stack.length === 0) {
          count = Math.max(count, i - validStartIndex);
        } else {
          count = Math.max(count, i - stack[stack.length - 1]);
        }
      }
    }
  }
  return count;
};

const output = longestValidParentheses("(()");
console.log(output); // 2