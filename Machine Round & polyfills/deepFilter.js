
// https://leetcode.com/discuss/interview-question/328553/amazon-phone-screen-deep-filter
const filter = (s) => typeof s === "string";
const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const deepFilter = (obj, filter) => {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object") {
      deepFilter(value, filter);
    } else {
      if (!filter(value)) {
        delete obj[key];
      }
    }

    if (typeof obj[key] === "object" && Object.entries(obj[key]).length === 0) {
      delete obj[key];
    }
  }
};

deepFilter(obj, filter);
console.log(obj);
