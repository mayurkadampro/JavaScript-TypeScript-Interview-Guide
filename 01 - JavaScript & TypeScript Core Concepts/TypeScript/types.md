# TypeScript Types

TypeScript provides static typing through its type system, allowing developers to define and enforce data structures. Below are the core types in TypeScript.

## 1️⃣ Basic Types

```typescript
let isDone: boolean = false;  // Boolean
let age: number = 25;         // Number
let firstName: string = "John"; // String
let user: null = null;        // Null
let notDefined: undefined = undefined; // Undefined
```

## 2️⃣ Array and Tuple

```typescript
let numbers: number[] = [1, 2, 3];  // Array of numbers
let user: [string, number] = ["John", 25];  // Tuple (fixed structure)
```

## 3️⃣ Enum

```typescript
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
```

## 4️⃣ Any and Unknown

```typescript
let anything: any = "Hello"; // Can be any type
anything = 10;

let uncertain: unknown = "Test";
uncertain = 42; // Still flexible but requires type checking
```

## 5️⃣ Void and Never

```typescript
function logMessage(): void {
    console.log("This function returns nothing");
}

function throwError(): never {
    throw new Error("Something went wrong");
}
```

## 6️⃣ Object and Interface

```typescript
let person: {name: string, age: number} = { name: "John", age: 30 };

interface User {
    name: string;
    age: number;
}

let user1: User = { name: "Alice", age: 28 };
```

## 7️⃣ Union and Intersection Types

```typescript
let id: string | number;
id = "123";
id = 123; // Both are allowed

interface Employee {
    name: string;
    empId: number;
}

interface Manager {
    name: string;
    department: string;
}

let teamLead: Employee & Manager = {
    name: "Sarah",
    empId: 101,
    department: "Engineering"
};
```

## 8️⃣ Type Aliases

```typescript
type StringOrNumber = string | number;

let value: StringOrNumber = "Hello";
value = 42; // Both are valid
```

## 9️⃣ Generics

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Hello");
let numberOutput = identity<number>(42);
```

## 🔟 Type Assertions

```typescript
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
```

---

### Summary
- **Basic Types**: `boolean`, `number`, `string`, `null`, `undefined`
- **Array & Tuple**: Fixed-length arrays
- **Enum**: Assign meaningful names to numbers
- **Any & Unknown**: `any` bypasses type checking, `unknown` requires type checks
- **Void & Never**: `void` for functions that return nothing, `never` for errors
- **Objects & Interfaces**: Define structured objects
- **Union & Intersection Types**: Combine types
- **Type Aliases**: Create custom types
- **Generics**: Create reusable type-safe functions
- **Type Assertions**: Treat a variable as a different type

---

TypeScript helps ensure code correctness and maintainability. Understanding these types will help you write more robust applications! 🚀