// A variable timer is declared inside the debounce function to keep track of the debounce timer.
// When the debounced function is called,
// it first clears any previously scheduled execution of the original function by calling clearTimeout with the timeoutId variable.
// A new debounce timer is set using setTimeout. The setTimeout function takes a callback function and a delay time.
// The timeoutId is updated with the identifier of the new debounce timer.
// allowing it to be cleared if the debounced function is called again before the debounce time elapses.
// As a result, if the debounced function is called multiple times within the debounce time window,
// the timer is reset each time, and the original function will only be executed after a period of inactivity that exceeds the debounce time.
let timer;
const debounce = (message) => {
  clearTimeout(timer);
  timer = setTimeout(() => console.log(message), 100);
};

debounce("Hello"); // cancelled
debounce("World"); // cancelled
debounce("Hey");
