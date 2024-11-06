const cacheApiCall = (time) => {
    const cache = {};

    return async (url, config = {}) => {
        const key = `${url}-${JSON.stringify(config)}`;
        const entry = cache[key];

        if (!entry || Date.now() > entry.expiry) {
            try {
                console.log("Making new API call");
                const response = await fetch(url, config).then((res) =>
                    res.json()
                );
                cache[key] = { value: response, expiry: Date.now() + time };
            } catch (err) {
                console.log(err);
            }
        }

        return cache[key].value;
    };
};

const call = cacheApiCall(1500);
call("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
    console.log(data)
);

setTimeout(() => {
    // Return data from cahce
    call("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
        console.log(data)
    );
}, 1000);

setTimeout(() => {
    // Making new API call
    call("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
        console.log(data)
    );
}, 2000);
