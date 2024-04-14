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
