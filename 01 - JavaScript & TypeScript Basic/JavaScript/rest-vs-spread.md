# Rest vs. Spread Operator in JavaScript

**Full Article:** [Rest vs. Spread Operator](https://medium.com/mighty-ghost-hack/js-interview-5-rest-vs-spread-operator-5ffd578c9aa8)


## 📌 Introduction
JavaScript provides the **Rest (`...`)** and **Spread (`...`)** operators, which may look identical but serve different purposes.

- **Rest Operator (`...`)**: Gathers multiple elements into an array.
- **Spread Operator (`...`)**: Expands elements from an array or object.

Let's break them down with examples. 🚀

---

## ✨ Rest Operator (`...`)

The **Rest Operator** is used to collect remaining elements into an array.

### ✅ Example 1: Function Arguments
```js
function sum(...numbers) {  
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```
📌 Here, `...numbers` collects all function arguments into an array.

---

### ✅ Example 2: Destructuring Arrays
```js
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(rest);   // Output: [30, 40, 50]
```
📌 The `rest` variable gathers remaining values into an array.

---

### ✅ Example 3: Destructuring Objects
```js
const person = { name: "Alice", age: 25, city: "New York" };
const { name, ...details } = person;

console.log(name);    // Output: "Alice"
console.log(details); // Output: { age: 25, city: "New York" }
```
📌 `...details` collects remaining properties into an object.

---

## 🚀 Spread Operator (`...`)

The **Spread Operator** is used to expand iterable elements.

### ✅ Example 1: Copying Arrays
```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // Output: [1, 2, 3]
```
📌 This creates a shallow copy of `arr1` instead of referencing it.

---

### ✅ Example 2: Merging Arrays
```js
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const mergedArr = [...arrA, ...arrB];

console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6]
```
📌 The spread operator combines both arrays efficiently.

---

### ✅ Example 3: Copying Objects
```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // Output: { a: 1, b: 2, c: 3 }
```
📌 This creates a shallow copy of `obj1` and adds a new property.

---

### ✅ Example 4: Merging Objects
```js
const objA = { x: 10, y: 20 };
const objB = { y: 30, z: 40 };
const mergedObj = { ...objA, ...objB };

console.log(mergedObj); // Output: { x: 10, y: 30, z: 40 }
```
📌 If duplicate keys exist, the last object's key-value pair overwrites the previous one.

---

## 🔥 Key Differences: Rest vs. Spread

| Feature       | Rest Operator (`...`) | Spread Operator (`...`) |
|--------------|----------------------|------------------------|
| Purpose      | Collects multiple values into an array or object | Expands elements from an array or object |
| Used In      | Function parameters, array/object destructuring | Copying, merging arrays/objects |
| Example Usage | `function sum(...args) {}` | `const arr2 = [...arr1]` |

---

## 🎯 Summary
- **Rest (`...`)** groups values into an array or object.
- **Spread (`...`)** expands values from an array or object.
- Both use the same syntax but serve different purposes.

✅ Mastering these will make your JavaScript code cleaner and more efficient!

---

Let me know if you want further refinements! 🚀

