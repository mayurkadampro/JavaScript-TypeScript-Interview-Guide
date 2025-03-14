# JavaScript Generators

**Full Article:** [JavaScript Generator](https://medium.com/mighty-ghost-hack/js-interview-11-javascript-generator-88b163b0ea2f)

Generators in JavaScript are a special type of function that can pause and resume execution. They provide an efficient way to handle iteration, asynchronous programming, and infinite sequences.

---

## 🔹 What is a Generator?
A generator is a function that returns an **iterator** and is defined using the `function*` syntax. Instead of `return`, generators use the `yield` keyword to pause execution and return values step by step.

### Syntax:
```js
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generatorFunction();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

---

## 🔹 How Generators Work
Generators allow execution to be paused and resumed on demand using `.next()`. Each time `.next()` is called, execution continues until the next `yield` statement.

```js
function* counter() {
    let count = 1;
    while (true) {
        yield count++;
    }
}

const counterGen = counter();
console.log(counterGen.next().value); // 1
console.log(counterGen.next().value); // 2
console.log(counterGen.next().value); // 3
```

---

## 🔹 Generator Methods
Generators have three main methods:
1. **`next(value)`** → Resumes execution and optionally passes a value to the generator.
2. **`return(value)`** → Ends the generator and optionally returns a value.
3. **`throw(error)`** → Throws an error inside the generator.

### Example:
```js
function* myGenerator() {
    let x = yield "Hello";
    console.log(x); // Receives the value passed to .next()
    let y = yield "World";
    console.log(y);
}

const gen = myGenerator();
console.log(gen.next().value); // "Hello"
console.log(gen.next(42).value); // "World", logs 42
console.log(gen.next(100).done); // Logs 100, generator is done
```

---

## 🔹 Using Generators with `for...of`
Generators are iterable and can be used with `for...of` loops.

```js
function* colors() {
    yield "Red";
    yield "Green";
    yield "Blue";
}

for (let color of colors()) {
    console.log(color);
}
// Output:
// Red
// Green
// Blue
```

---

## 🔹 Infinite Generators
Generators can be used to create infinite sequences without causing memory overflow.

```js
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fibGen = fibonacci();
console.log(fibGen.next().value); // 0
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
```

---

## 🔹 Generators in Asynchronous Programming
Generators can be combined with `Promises` to handle asynchronous code elegantly.

```js
function* asyncTask() {
    console.log("Start Task");
    yield new Promise(resolve => setTimeout(() => resolve("Task Done"), 2000));
    console.log("End Task");
}

const gen = asyncTask();
gen.next().value.then(console.log); // "Task Done" after 2 seconds
```

---

## 🔹 Conclusion
Generators are a powerful feature in JavaScript that allow for better handling of iteration, lazy evaluation, and asynchronous code. Mastering them can lead to more efficient and readable code!

JavaScript does not support defining generator functions using arrow function syntax. This is because generator functions require the function* syntax, and arrow functions do not have their own this, arguments, super, or new.target, making them incompatible with the generator's behavior.

🚀 **Happy Coding!** 🎉

