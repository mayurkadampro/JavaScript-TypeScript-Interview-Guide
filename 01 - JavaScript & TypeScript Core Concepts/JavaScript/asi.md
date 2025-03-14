# Automatic Semicolon Insertion (ASI) in JavaScript

**Full Article:** [JavaScript Interview: Automatic Semicolon Insertion (ASI)](https://medium.com/mighty-ghost-hack/js-interview-3-automatic-semicolon-insertion-asi-f9f7ff95eab9)

## Introduction
JavaScript uses **Automatic Semicolon Insertion (ASI)** to handle missing semicolons, allowing developers to write code without explicitly adding them. However, ASI can sometimes cause unexpected errors.

---

## ✅ ASI Works as Expected
In many cases, JavaScript correctly inserts semicolons where they are omitted:

```js
console.log("Hello")
console.log("World")
```

JavaScript automatically interprets this as:

```js
console.log("Hello");
console.log("World");
```

### Output:
```
Hello
World
```

---

## ❌ ASI Can Cause Unexpected Errors
In certain cases, ASI may insert semicolons incorrectly, leading to unintended behavior.

### Example:
```js
function getNumber() {
    return
    42;
}

console.log(getNumber());
```

### Expected Output:
```
42
```

### Actual Output:
```
undefined
```

### Why?
ASI inserts a semicolon right after `return`, making the function behave like this:

```js
function getNumber() {
    return;  // ASI inserts a semicolon here
    42;      // This line is never reached
}
```

Thus, the function returns `undefined` instead of `42`.

---

## 🛠 How to Avoid ASI Issues?
1. **Always use explicit semicolons (`;`)** to prevent unintended behavior.
2. **Be cautious with return statements**, ensuring values are on the same line.
3. **Use linting tools** like ESLint to enforce semicolon rules.

---

## Summary Table
| Scenario | Expected | Issue |
|----------|----------|---------|
| `console.log("Hello") console.log("World")` | ✅ Works fine | No issue |
| `return` on a new line | ❌ Returns `undefined` | ASI inserts semicolon |
| Function expressions without semicolons | ❌ TypeError | ASI doesn’t insert semicolon |

---

## Conclusion
While ASI helps in simplifying JavaScript code, it can also lead to subtle bugs if not handled carefully. It's best practice to **explicitly add semicolons** and **write clean, readable code** to avoid unexpected behavior.

---

