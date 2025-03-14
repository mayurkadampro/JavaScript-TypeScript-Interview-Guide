# Undefined vs Null in JavaScript

**Full Article:** [JS Interview - Undefined vs Null](https://medium.com/mighty-ghost-hack/js-interview-1-undefined-vs-null-db3299489a35)

## 📌 Basic Differences

```js
let a;  // No value assigned, so it's undefined
let b = null;  // Explicitly set to null

console.log(a);  // Output: undefined
console.log(b);  // Output: null

console.log(typeof a);  // Output: "undefined"
console.log(typeof b);  // Output: "object" (typeof null is a known JavaScript quirk)
```

---

## 🔍 Checking for Undefined and Null

```js
let c;  // undefined
let d = null;

console.log(c == d);   // true (== performs type coercion)
console.log(c === d);  // false (=== checks both value and type)

console.log(c === undefined);  // true
console.log(d === null);       // true
```

---

## 🎯 Function Arguments (Default vs. Explicit null)

```js
function example(param) {
    if (param === undefined) {
        console.log("Parameter is undefined");
    } else if (param === null) {
        console.log("Parameter is explicitly set to null");
    } else {
        console.log("Parameter has a value:", param);
    }
}

example();         // "Parameter is undefined"
example(null);    // "Parameter is explicitly set to null"
example(5);       // "Parameter has a value: 5"
```

---

## 📦 Object Properties (Undefined vs. Null)

```js
let obj = { key1: "value", key2: null };

console.log(obj.key1);  // Output: "value"
console.log(obj.key2);  // Output: null
console.log(obj.key3);  // Output: undefined (key3 does not exist)
```

### Deleting Properties

```js
let tempObj = { key: "value" };
console.log(tempObj.key); // "value"

delete tempObj.key;
console.log(tempObj.key); // undefined
```

---

## 📋 Array Behavior (Undefined vs. Null)

```js
let arr = [1, undefined, null, 4];

console.log(arr[1]);  // undefined
console.log(arr[2]);  // null

arr[5] = 10; // Skips index 4
console.log(arr);  // [1, undefined, null, 4, empty, 10]
```

---

## 🔄 JSON Handling (Undefined is Removed, Null Stays)

```js
let obj1 = { a: undefined, b: null, c: "text" };
let jsonString = JSON.stringify(obj1);

console.log(jsonString);  // '{"b":null,"c":"text"}' (undefined is removed)
```

---

## 🔗 Optional Chaining (`?.`)

```js
let obj2 = { key: null };

console.log(obj2?.key);  // null
console.log(obj2?.nonExistentKey);  // undefined
```

---

## 🛠 Default Values with Nullish Coalescing (`??`)

```js
let e;
let f = null;
let g = "Hello";

console.log(e ?? "default");  // "default" (undefined triggers default)
console.log(f ?? "default");  // "default" (null triggers default)
console.log(g ?? "default");  // "Hello" (value exists)
```



