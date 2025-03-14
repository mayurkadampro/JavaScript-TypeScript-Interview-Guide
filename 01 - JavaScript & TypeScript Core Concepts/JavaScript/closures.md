# JavaScript Closures

**Full Article:** [JavaScript Closures](https://medium.com/mighty-ghost-hack/js-interview-8-javascript-closures-953bcc8c5c67)

## Introduction
Closures are one of the most important concepts in JavaScript. A closure is created when a function retains access to its lexical scope, even when the function is executed outside of that scope.

---

## Basic Closure Example
```javascript
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const newFunction = outerFunction("Hello");
newFunction("World");  // Output: Outer: Hello, Inner: World
```

### Explanation
- `outerFunction` returns `innerFunction`.
- `innerFunction` retains access to `outerVariable` even after `outerFunction` has finished executing.

---

## Practical Use Cases of Closures

### 1️⃣ Data Privacy (Encapsulation)
Closures can be used to create private variables.

```javascript
function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment();  // Output: 1
increment();  // Output: 2
```

### 2️⃣ Function Factory
Closures can generate specialized functions dynamically.

```javascript
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5));  // Output: 10
```

### 3️⃣ Maintaining State in Async Code
Closures help preserve values in asynchronous operations.

```javascript
function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

delayedMessage("Hello, after 2 seconds", 2000);
```

### 4️⃣ Iterators with Closures
Closures are useful for iterators.

```javascript
function createCounter() {
    let count = 0;
    return {
        increment: function () { count++; return count; },
        decrement: function () { count--; return count; },
        getCount: function () { return count; }
    };
}

const counterObj = createCounter();
console.log(counterObj.increment()); // 1
console.log(counterObj.increment()); // 2
console.log(counterObj.decrement()); // 1
console.log(counterObj.getCount());  // 1
```

---

## Closures in Loops (Common Pitfall)
Closures capture the variable reference, not the value at the time.

```javascript
for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 4, 4, 4 (not 1, 2, 3 as expected)
```

### ✅ Fix with `let`
```javascript
for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 1, 2, 3
```

---

## Summary
- Closures allow functions to remember their lexical scope.
- Useful for data privacy, state persistence, and functional programming patterns.
- Be cautious when using closures inside loops.

Closures are powerful tools in JavaScript, making code more modular, reusable, and efficient! 🚀

