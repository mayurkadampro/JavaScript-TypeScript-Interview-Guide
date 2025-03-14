# JavaScript Iterators and Iterables

**Full Article:** [Iterators and Iterables](https://medium.com/mighty-ghost-hack/js-interview-10-iterators-and-iterables-227827118b20)

## 🔹 Introduction
In JavaScript, **iterables** are objects that implement the **`Symbol.iterator`** method, making them compatible with iteration protocols. **Iterators** are objects that define a **`next()`** method, which returns an object with `{ value, done }` properties.

---

## 📌 Iterables in JavaScript
An **iterable** is an object that provides a way to iterate over its elements using a loop. Common iterables include:

- Arrays
- Strings
- Maps
- Sets

### ✅ Example: Built-in Iterables
```js
const arr = [1, 2, 3];
for (let num of arr) {
    console.log(num);
}
// Output: 1, 2, 3
```

### ✅ Checking If an Object Is Iterable
```js
console.log(typeof arr[Symbol.iterator]); // Output: function
```

---

## 📌 Iterators in JavaScript
An **iterator** is an object with a **`next()`** method that returns `{ value, done }`:

### ✅ Example: Creating an Iterator Manually
```js
function createIterator(arr) {
    let index = 0;
    return {
        next: function() {
            return index < arr.length
                ? { value: arr[index++], done: false }
                : { value: undefined, done: true };
        }
    };
}

const iterator = createIterator(["a", "b", "c"]);
console.log(iterator.next()); // { value: "a", done: false }
console.log(iterator.next()); // { value: "b", done: false }
console.log(iterator.next()); // { value: "c", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

---

## 📌 Custom Iterable Objects
You can make any object iterable by implementing the **`Symbol.iterator`** method:

### ✅ Example: Custom Iterable Object
```js
const myIterable = {
    data: [10, 20, 30],
    [Symbol.iterator]: function() {
        let index = 0;
        return {
            next: () => {
                return index < this.data.length
                    ? { value: this.data[index++], done: false }
                    : { done: true };
            }
        };
    }
};

for (let value of myIterable) {
    console.log(value);
}
// Output: 10, 20, 30
```

---

## 📌 Generators as Iterators
**Generators** simplify iterator creation using the `function*` syntax:

### ✅ Example: Generator Function
```js
function* generatorFunc() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generatorFunc();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

---

## 📌 Practical Use Cases
✅ **Iterating Over Data**
```js
const set = new Set(["apple", "banana", "cherry"]);
for (let item of set) {
    console.log(item);
}
// Output: apple, banana, cherry
```

✅ **Spreading Iterables**
```js
const str = "hello";
const letters = [...str];
console.log(letters); // [ 'h', 'e', 'l', 'l', 'o' ]
```

✅ **Custom Range Iterator**
```js
function range(start, end) {
    return {
        [Symbol.iterator]: function() {
            let current = start;
            return {
                next: () => {
                    return current <= end
                        ? { value: current++, done: false }
                        : { done: true };
                }
            };
        }
    };
}

for (let num of range(1, 5)) {
    console.log(num);
}
// Output: 1, 2, 3, 4, 5
```

---

## 🔹 Summary
- **Iterables** implement `Symbol.iterator`.
- **Iterators** have a `next()` method returning `{ value, done }`.
- **Generators** simplify iteration.
- Iterables allow use in `for...of`, spreading (`...`), and `Array.from()`.

🚀 **Mastering iterators and iterables helps in handling asynchronous data and optimizing JavaScript performance!**

