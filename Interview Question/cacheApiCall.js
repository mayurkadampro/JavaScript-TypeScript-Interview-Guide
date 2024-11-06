const cacheApiCall = (time) => {
  const cache = {};

  return async (url, config = {}) => {
    const key = `${url}-${JSON.stringify(config)}`;
    const entry = cache[key];

    // Check if entry exists and is not expired
    if (!entry || Date.now() > entry.expiry) {
      try {
        console.log("Making new API call");
        const response = await fetch(url, config).then((res) => res.json());

        // Cache the response with an expiration time
        cache[key] = { value: response, expiry: Date.now() + time };

        // Set a timeout to delete the cache after it expires
        setTimeout(() => {
          if (Date.now() > cache[key]?.expiry) {
            delete cache[key];
            console.log(`Cache expired and removed for key: ${key}`);
          }
        }, time);
      } catch (err) {
        console.error("API call failed:", err);
      }
    }

    // Return the cached value
    return cache[key]?.value;
  };
};

// Usage example
const call = cacheApiCall(1500);
call("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
  console.log(data)
);

setTimeout(() => {
  // Returns data from cache if within cache time
  call("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
    console.log(data)
  );
}, 1000);

setTimeout(() => {
  // Makes a new API call after cache expires
  call("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
    console.log(data)
  );
}, 4000);

setTimeout(() => {
  // Returns data from cache if within cache time
  call("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
    console.log(data)
  );
}, 5000);
