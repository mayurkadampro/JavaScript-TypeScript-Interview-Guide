# JavaScript Scope Explained

> **Full article**: [What is Scope?](https://medium.com/mighty-ghost-hack/js-interview-4-what-is-scope-780a3c7bac84)

## 1️⃣ Global Scope
```js
var globalVar = "I'm global!";

function testScope() {
    console.log(globalVar);  // ✅ Accessible
}

testScope();
console.log(globalVar);  // ✅ Accessible
```
---

## 2️⃣ Function (Local) Scope
```js
function localScope() {
    var localVar = "I'm inside a function";
    console.log(localVar);  // ✅ Accessible inside
}

localScope();
console.log(localVar);  // ❌ ReferenceError: localVar is not defined
```
---

## 3️⃣ Block Scope (let and const)
```js
{
    let blockScoped = "I'm inside a block";
    const anotherBlockScoped = "Me too!";
    var functionScoped = "I'm accessible outside!";
}

console.log(functionScoped);  // ✅ Accessible (var is function-scoped)
console.log(blockScoped);  // ❌ ReferenceError: blockScoped is not defined
console.log(anotherBlockScoped);  // ❌ ReferenceError: anotherBlockScoped is not defined
```
---

## 4️⃣ Lexical (Closure) Scope
```js
function outer() {
    let outerVar = "I'm outer";

    function inner() {
        console.log(outerVar);  // ✅ Accessible due to lexical scope
    }

    inner();
}
outer();
console.log(outerVar);  // ❌ ReferenceError
```
---

## 5️⃣ Dynamic Scope (`this` Context)
```js
const obj = {
    name: "John",
    showName: function () {
        console.log(this.name);
    }
};

obj.showName();  // ✅ "John" (this refers to obj)

const detached = obj.showName;
detached();  // ❌ Undefined (this refers to global/window)
```
### ✅ Fix: Use `.bind()`, `.call()`, `.apply()`, or Arrow Functions

### 1️⃣ Use `.bind(this)`
```js
const obj1 = {
    name: "John",
    showName: function () {
        console.log(this.name);
    }
};

const detached1 = obj1.showName.bind(obj1);  // 🔗 Bind obj to maintain `this`
detached1();  // ✅ "John"
```

### 2️⃣ Assign `this` to a Variable
```js
const obj2 = {
    name: "John",
    showName: function () {
        const self = this;  // Store `this` reference
        return function () {
            console.log(self.name);
        };
    }
};

const detached2 = obj2.showName();
detached2();  // ✅ "John"
```

### 3️⃣ Use an Arrow Function Inside a Method
```js
const obj3 = {
    name: "John",
    showName: function () {
        return () => console.log(this.name);  // Arrow function inherits `this`
    }
};

const detached3 = obj3.showName();
detached3();  // ✅ "John"
```
---

## 🎯 Summary
- **Global Scope**: Accessible everywhere.
- **Function Scope**: Variables declared with `var` inside a function are only accessible within that function.
- **Block Scope**: `let` and `const` are block-scoped, whereas `var` is function-scoped.
- **Lexical Scope**: Inner functions can access outer function variables.
- **Dynamic Scope (`this`)**: The value of `this` depends on how a function is called.

### ✅ Fixes for `this` Context Issues
- `.bind()`, `.call()`, `.apply()`
- Assign `this` to a variable (`self = this`)
- Use **arrow functions** to inherit `this`.

Happy Coding! 🚀
