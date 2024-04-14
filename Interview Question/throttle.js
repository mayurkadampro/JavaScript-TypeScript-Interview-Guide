let wait = false;
function throttle(message) {
  if (wait) {
    return;
  }
  wait = true;
  setTimeout(() => {
    console.log(message);
    wait = false;
  }, 100);
}

throttle("Hello"); // exec
throttle("World"); // cancelled
throttle("Hey"); // cancelled

// LeetCode - https://leetcode.com/problems/throttle/

// const throttlee = (fn, t) => {
//   let pending = false;
//   let nextArgs;
//   const wrapper = (...args) => {
//     nextArgs = args;
//     if (!pending) {
//       fn(...args);
//       pending = true;
//       nextArgs = undefined;
//       setTimeout(() => {
//         pending = false;
//         if (nextArgs) wrapper(...nextArgs);
//       }, t);
//     }
//   };
//   return wrapper;
// };

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
