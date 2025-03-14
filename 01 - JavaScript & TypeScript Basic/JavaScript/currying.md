# JavaScript Currying

**Full Article:** [JavaScript Currying](https://medium.com/mighty-ghost-hack/js-interview-9-javascript-currying-2e067960ab2e)

## What is Currying?
Currying is a functional programming technique where a function with multiple parameters is transformed into a sequence of functions, each taking a single parameter. This allows for partial application of arguments.

### Why Use Currying?
- **Reusability**: Functions can be partially applied and reused.
- **Readability**: More intuitive function calls.
- **Functional Composition**: Easier to create complex functions by chaining simpler ones.

---

## Example 1: Basic Currying
```js
function add(a) {
    return function(b) {
        return a + b;
    };
}

const add5 = add(5);
console.log(add5(3)); // Output: 8
console.log(add(4)(6)); // Output: 10
```

### Explanation
- `add(5)` returns a function that takes `b` as a parameter.
- Calling `add5(3)` applies `b = 3`, resulting in `5 + 3 = 8`.
- We can also call `add(4)(6)` directly.

---

## Example 2: Currying with Arrow Functions
```js
const multiply = a => b => a * b;

console.log(multiply(2)(3)); // Output: 6

const double = multiply(2);
console.log(double(5)); // Output: 10
```

### Explanation
- `multiply(2)` returns a function that multiplies any number by `2`.
- `double(5)` applies `b = 5`, resulting in `2 * 5 = 10`.

---

## Example 3: Converting a Normal Function to a Curried Function
```js
function normalFunction(a, b, c) {
    return a + b + c;
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

const curriedSum = curry(normalFunction);
console.log(curriedSum(1)(2)(3)); // Output: 6
console.log(curriedSum(1, 2)(3)); // Output: 6
console.log(curriedSum(1, 2, 3)); // Output: 6
```

### Explanation
- `curry(fn)` transforms a function into a curried version.
- The function `curried` keeps collecting arguments until the original function's expected number of arguments is reached.
- Supports calling with different argument groupings.

---

## Use Cases of Currying
1. **Event Handling**: Pre-configure event handlers.
2. **Functional Composition**: Chain functions more effectively.
3. **Higher-Order Functions**: Improve code modularity.
4. **Partial Application**: Pre-set some arguments for later use.

---

## Conclusion
Currying is a powerful concept in JavaScript that enhances modularity, reusability, and function composition. Understanding how to apply it effectively can greatly improve your functional programming skills!

---

🚀 *Keep practicing and happy coding!*

