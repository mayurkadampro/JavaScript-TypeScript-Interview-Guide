# Introduction to JavaScript NaN

**Full Article:** [JavaScript NaN](https://medium.com/mighty-ghost-hack/js-interview-6-introduction-to-javascript-nan-d6b1a441e7a8)

## What is `NaN`?
`NaN` stands for **Not-a-Number**. It is a special value in JavaScript that represents an invalid number or an unrepresentable mathematical operation.

```javascript
console.log(typeof NaN); // "number"
```
Even though `NaN` means "Not-a-Number," its type is still `number` in JavaScript.

---

## When does `NaN` occur?
### 1️⃣ Invalid Mathematical Operations
```javascript
console.log(0 / 0); // NaN
console.log(Infinity - Infinity); // NaN
console.log(Math.sqrt(-1)); // NaN
```

### 2️⃣ Attempting to Convert Non-Numeric Values
```javascript
console.log(parseInt("hello")); // NaN
console.log(Number("world")); // NaN
console.log(5 * "abc"); // NaN
```

### 3️⃣ Operations with `undefined`
```javascript
let x;
console.log(x + 2); // NaN
```

---

## How to Check for `NaN`?
### 1️⃣ Using `isNaN()` (Global Function)
```javascript
console.log(isNaN("hello")); // true
console.log(isNaN(42)); // false
console.log(isNaN(NaN)); // true
```
🔹 **Caution:** `isNaN()` performs type coercion, which may lead to unexpected results.
```javascript
console.log(isNaN("123")); // false ("123" is converted to a number)
console.log(isNaN("123abc")); // true (cannot fully convert)
```

### 2️⃣ Using `Number.isNaN()` (Safer Approach)
```javascript
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false
console.log(Number.isNaN(42)); // false
```
✅ `Number.isNaN()` does **not** perform type coercion, making it a more reliable check.

---

## `NaN` Behavior in Arithmetic Operations
### 1️⃣ Propagation of `NaN`
Once `NaN` appears in an operation, it usually propagates:
```javascript
console.log(NaN + 5); // NaN
console.log(NaN * 10); // NaN
```

### 2️⃣ `NaN` is Not Equal to Itself
```javascript
console.log(NaN === NaN); // false
```
🔹 This is because `NaN` is **not** equal to anything, even itself!

To check for `NaN`, use:
```javascript
console.log(Object.is(NaN, NaN)); // true
```

---

## Fixing `NaN` Issues
### 1️⃣ Provide Default Values with `||` or `??`
```javascript
let result = NaN || 0; // 0 (using OR operator)
let safeValue = NaN ?? 10; // 10 (Nullish coalescing operator, works only for null & undefined)
```

### 2️⃣ Validate Input Before Performing Operations
```javascript
function safeDivide(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || b === 0) {
        return "Invalid Operation";
    }
    return a / b;
}

console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0)); // "Invalid Operation"
console.log(safeDivide(10, "hello")); // "Invalid Operation"
```

---

## Summary
- `NaN` stands for "Not-a-Number" and occurs due to invalid math operations or failed conversions.
- `isNaN()` is **not** always reliable due to type coercion; prefer `Number.isNaN()`.
- `NaN` is **not equal** to itself, making direct comparisons unreliable.
-  Use proper validation and default values to prevent `NaN` issues in code.

🚀 **Understanding `NaN` helps in writing more robust JavaScript applications!**

