/* 
  A variable timer is declared to keep track of the debounce timer.
  When the debounced function is called
  it first clears any previously scheduled execution of the original function by calling clearTimeout with the timer variable.
  A new debounce timer is set using setTimeout. The setTimeout function takes a callback function and a delay time.
  The timer is updated with the identifier of the new debounce timer. Allowing it to be cleared if the debounced function is called again before the debounce time elapses.
  As a result, if the debounced function is called multiple times within the debounce time window,
  the timer is reset each time, and the original function will only be executed after a period of inactivity that exceeds the debounce time.
*/

let timer;
const debounce = (message) => {
  clearTimeout(timer);
  timer = setTimeout(() => console.log(message), 100);
};

debounce("Hello"); // cancelled
debounce("World"); // cancelled
debounce("Hey"); // exec

// LeetCode  - https://leetcode.com/problems/debounce/
// const debounce = (fn, t) => {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), t);
//   };
// };

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */