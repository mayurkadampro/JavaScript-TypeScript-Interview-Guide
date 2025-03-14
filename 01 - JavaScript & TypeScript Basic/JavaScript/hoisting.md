# JavaScript Hoisting

**Full Article:** [JavaScript Hoisting Explained](https://medium.com/mighty-ghost-hack/js-interview-2-what-is-hoisting-db1bf2900310)

---

## Variable Hoisting with `var`
```javascript
console.log(a);  // Output: undefined
var a = 10;
console.log(a);  // Output: 10
```

`var` declarations are hoisted, but their assignments are not.

---

## `let` and `const` Hoisting (Temporal Dead Zone)
```javascript
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b);

console.log(c);  // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c);
```

Unlike `var`, `let` and `const` are hoisted but stay in the **Temporal Dead Zone (TDZ)** until they are assigned.

---

## Function Hoisting
```javascript
hello();  // Output: "Hello, world!"

function hello() {
    console.log("Hello, world!");
}

hello();  // "Hello, world!"
```

Function declarations are fully hoisted, allowing them to be called before they are defined.

---

## Function Expressions are **Not** Hoisted
```javascript
greet();  // TypeError: greet is not a function

var greet = function() {
    console.log("Good Morning!");
};
```

Function expressions are not hoisted, and accessing them before assignment results in an error.

---

## Arrow Functions are **Not** Hoisted
```javascript
arrowFunc();  // TypeError: arrowFunc is not a function

var arrowFunc = () => {
    console.log("Arrow function called!");
};
```

Like function expressions, arrow functions are also not hoisted.

---

## Class Hoisting
```javascript
const obj = new Person();  // ReferenceError: Cannot access 'Person' before initialization

class Person {
    constructor() {
        this.name = "John";
    }
}
```

Classes are **not hoisted**, so they must be defined before being instantiated.

---

## Summary
| Feature              | Hoisted? | Usable Before Declaration? |
|----------------------|---------|---------------------------|
| `var`               | ✅ Yes  | 🚫 Undefined             |
| `let` / `const`     | ✅ Yes  | 🚫 TDZ Error             |
| Function Declaration | ✅ Yes  | ✅ Fully Usable          |
| Function Expression | 🚫 No   | 🚫 TypeError             |
| Arrow Function      | 🚫 No   | 🚫 TypeError             |
| Class Declaration   | 🚫 No   | 🚫 ReferenceError        |

Understanding hoisting helps avoid bugs and write cleaner JavaScript code! 🚀

