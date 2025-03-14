const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
      g: 5,
    },
  },
};
obj.b.d.h = obj;

const removeCircularDependancy = (iterativeObj, compareObj) => {
  for (const key in iterativeObj) {
    const value = iterativeObj[key];
    if (typeof value === "object") {
      if (value === compareObj) {
        delete iterativeObj[key];
      } else {
        removeCircularDependancy(value, compareObj);
      }
    }
  }
};

const output = removeCircularDependancy(obj, obj);
console.log(obj);
// output
/*
{
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
      g: 5,
    },
  },
};
*/
