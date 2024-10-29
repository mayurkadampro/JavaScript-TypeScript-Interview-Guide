const URL = "https://fake-json-api.mock.beeceptor.com/users";
const duration = 100;

const fetchWithTimeout = (url, timeout) => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let timerId = null;

    fetch(URL, { signal })
      .then((res) => res.json())
      .then((res) => {
        clearTimeout(timerId);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });

    timerId = setTimeout(() => {
      controller.abort();
      reject("cancel the reqeust");
    }, duration);
  });
};

fetchWithTimeout(URL, duration)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
});
