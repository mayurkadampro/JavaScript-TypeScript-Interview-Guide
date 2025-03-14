# JavaScript `this` in Normal vs. Arrow Functions

## 1️⃣ Object Method (`this` in normal vs. arrow function)
```javascript
const obj = {
    name: "John",
    normalFunction: function () {
        console.log(this.name);  // ✅ "John"
    },
    arrowFunction: () => {
        console.log(this.name);  // ❌ undefined (inherits from global/window)
    }
};

obj.normalFunction();
obj.arrowFunction();
```
---

## 2️⃣ Constructor Function (`this` in normal vs. arrow function)
```javascript
function Person(name) {
    this.name = name;
}

// ✅ Works fine
const john = new Person("John");
console.log(john.name);  // "John"

// ❌ Arrow functions cannot be used as constructors
const ArrowPerson = (name) => {
    this.name = name;
};
const jane = new ArrowPerson("Jane");  // ❌ TypeError: ArrowPerson is not a constructor
```
---

## 3️⃣ Event Listeners (`this` in normal vs. arrow function)
```javascript
const button = document.querySelector("button");

// ✅ Normal function: `this` refers to the button element
button.addEventListener("click", function () {
    console.log(this);  // ✅ <button> element
});

// ❌ Arrow function: `this` refers to `window`
button.addEventListener("click", () => {
    console.log(this);  // ❌ window
});
```
---

## 4️⃣ `setTimeout` (`this` in normal vs. arrow function)
```javascript
const obj2 = {
    name: "John",
    normalFunction: function () {
        setTimeout(function () {
            console.log(this.name);  // ❌ undefined (this refers to window)
        }, 1000);
    },
    arrowFunction: function () {
        setTimeout(() => {
            console.log(this.name);  // ✅ "John" (this is inherited)
        }, 1000);
    }
};

obj2.normalFunction();
obj2.arrowFunction();
```
---

## Summary
- **Use `function`** when you need dynamic `this` (e.g., object methods, constructors).
- **Use arrow functions** when you want `this` to inherit from the surrounding scope (e.g., callbacks, `setTimeout`).

