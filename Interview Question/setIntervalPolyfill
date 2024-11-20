function MyInterval(callback, delay) {
  let timerId;
  function repeat() {
    timerId = setTimeout(() => {
      callback();
      repeat(); // Call the function again
    }, delay);
  }

  repeat();

  return {
    clearInterval: () => clearTimeout(timerId),
  };
}

// Usage Example:
const interval = MyInterval(() => {
  console.log("Hello, world!");
}, 1000);

// To clear the interval after 5 seconds
setTimeout(() => {
  interval.clearInterval();
  console.log("Interval cleared");
}, 5000);
