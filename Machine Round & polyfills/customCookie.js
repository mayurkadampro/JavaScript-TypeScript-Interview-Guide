function useCustomCookie() {
  const store = new Map();

  Object.defineProperty(document, "myCookie", {
    get() {
      const cookies = [];
      const time = Date.now();

      // get all the entries from the store
      for (const [name, { value, expires }] of store) {
        // if the entry is expired
        // remove it from the store
        if (expires <= time) {
          store.delete(name);
        }
        // else push the key-value pair in the cookies array
        else {
          cookies.push(`${name}=${value}`);
        }
      }

      // return all the key-value pairs as a string
      return cookies.join("; ");
    },
    set(val) {
      // get the key value of the data
      // and option from the string
      const { key, value, options } = parseCookieString(val);

      // if option has max-age
      // set the expiry date
      let expires = Infinity;
      if (options["max-age"]) {
        expires = Date.now() + Number(options["max-age"]) * 1000;
      }

      // add the entry in the store
      store.set(key, { value, expires });
    },
  });

  function parseCookieString(str) {
    // split the string on ;
    // separate the data and the options
    const [nameValue, ...rest] = str.split(";");

    // get the key value separated from the data
    const [key, value] = separateKeyValue(nameValue);

    // parse all the options and store it
    // like max-age
    const options = {};
    for (const option of rest) {
      const [key, value] = separateKeyValue(option);
      options[key] = value;
    }

    return {
      key,
      value,
      options,
    };
  }

  function separateKeyValue(str) {
    return str.split("=").map((s) => s.trim());
  }
}
