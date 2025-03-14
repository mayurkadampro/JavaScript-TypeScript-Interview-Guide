// Simple concat function
const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const output = join(1, 2, 3);
console.log(`output :- `, output); // '1_2_3'

// ============================================================================================================================== //
// Implementing currying with placeholder support
const curry = (fn) => {
  return function curried(...args) {
    // If enough arguments are provided,
    // call the original function
    if (args.length >= fn.length && !args.includes(curry.placeholder)) {
      return fn.apply(this, args);
    }

    // Otherwise, return a curried function
    // with placeholder support
    return function (...nextArgs) {
      const combinedArgs = args
        .map((arg) =>
          arg === curry.placeholder && nextArgs.length ? nextArgs.shift() : arg
        )
        .concat(nextArgs);
      return curried(...combinedArgs);
    };
  };
};

// ============================================================================================================================== //
// Calling curry normally without placeholder
const curriedJoin = curry(join);
const output1 = curriedJoin(1)(2)(3);
console.log(`output1 :- `, output1); // '1_2_3'

// ============================================================================================================================== //
// Calling curry with placeholder
const curriedJoin1 = curry(join);
const concatDigit = curriedJoin1(1, curry.placeholder, 3);
const output3 = concatDigit(5);
const output4 = concatDigit(4);
console.log(`output3 :- `, output3); // 1_5_3
console.log(`output4 :- `, output4); // 1_4_3
// ============================================================================================================================== //
