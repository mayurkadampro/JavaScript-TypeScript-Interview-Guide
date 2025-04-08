# 🧱 Composite Design Pattern - File System Example

The Composite Design Pattern allows you to compose objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly.

In this example, we simulate a **File System**, where:
- **Files** are leaf components.
- **Directories** are composite components that can contain files or other directories.

---

## 📁 Folder Structure

```
/FileSystem
│── index.ts                   # Entry point to run the example
│── FileSystemComponent.ts     # Common interface for all components
│── File.ts                    # Leaf node implementation
│── Directory.ts               # Composite node implementation
```

---

## 🧹 Components

### 1. `FileSystemComponent.ts`

```ts
export interface FileSystemComponent {
  show(indent?: string): void;
}
```
A base interface to be implemented by both files and directories.

---

### 2. `File.ts`

```ts
import { FileSystemComponent } from "./interface";

export class File implements FileSystemComponent {
  constructor(private name: string) {}

  show(indent: string = ""): void {
    console.log(`${indent}- File: ${this.name}`);
  }
}
```
A concrete implementation for leaf node (file).

---

### 3. `Directory.ts`

```ts
import { FileSystemComponent } from "./interface";

export class Directory implements FileSystemComponent {
  private children: FileSystemComponent[] = [];

  constructor(private name: string) {}

  add(component: FileSystemComponent): void {
    this.children.push(component);
  }

  show(indent: string = ""): void {
    console.log(`${indent}+ Directory: ${this.name}`);
    for (const child of this.children) {
      child.show(indent + "  ");
    }
  }
}
```
Composite node that can contain files or other directories.

---

### 4. `index.ts`

```ts
import { File } from "./File";
import { Directory } from "./Directory";

// Create leaf nodes
const file1 = new File("file1.txt");
const file2 = new File("file2.txt");
const file3 = new File("image.png");

// Create composite nodes
const docs = new Directory("Documents");
const images = new Directory("Images");
const root = new Directory("Root");

// Compose tree structure
docs.add(file1);
docs.add(file2);
images.add(file3);

root.add(docs);
root.add(images);

// Display structure
root.show();
```

---

## ▶️ Output

```
+ Directory: Root
  + Directory: Documents
    - File: file1.txt
    - File: file2.txt
  + Directory: Images
    - File: image.png
```

---

## ✅ Benefits of Composite Pattern

- **Uniformity**: Treat leaf and composite nodes the same way.
- **Simplicity**: Reduces complexity of client code.
- **Flexibility**: Easily extendable hierarchy.
- **Recursive Structure**: Natural representation of tree-like structures.

---

## 📦 When to Use

- When you want to represent part-whole hierarchies.
- When you want clients to treat individual objects and groups uniformly.
- When the structure of your objects can be represented as a tree.

---

## 🏑️ Related Patterns

- **Decorator**: Enhances behavior dynamically.
- **Flyweight**: Optimizes memory usage in similar object trees.
- **Composite + Visitor**: Great combo for operations on hierarchical structures.

---

