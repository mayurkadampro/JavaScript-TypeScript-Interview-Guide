# 🚗 Builder Design Pattern – Vehicle System

The **Builder Pattern** is a creational design pattern that provides a flexible solution to constructing complex objects. It separates the construction of a complex object from its representation so that the same construction process can create different representations.

This example demonstrates building different types of vehicles (like a sports car or a bike) using the builder pattern in TypeScript.

---

## 📁 Folder Structure

```
/VehicleBuilderPattern
│── index.ts              # Client code that uses the builder
│── Vehicle.ts            # Product class
│── VehicleBuilder.ts     # Builder class
```

---

## 🔧 How it Works

We are building a `Vehicle` object with different configurations such as:
- Type (e.g., Sports Car, Bike)
- Engine (e.g., V8, 150cc)
- Wheels (e.g., 4, 2)
- Color (e.g., Red, Black)

The `VehicleBuilder` class helps build this `Vehicle` object step-by-step using method chaining.

---

## 🧱 Code Explanation

### ✅ `Vehicle.ts` – Product Class

```ts
export class Vehicle {
  private type: string = '';
  private engine: string = '';
  private wheels: number = 0;
  private color: string = '';

  setType(type: string): void {
    this.type = type;
  }

  setEngine(engine: string): void {
    this.engine = engine;
  }

  setWheels(wheels: number): void {
    this.wheels = wheels;
  }

  setColor(color: string): void {
    this.color = color;
  }

  showSpecs(): void {
    console.log(\`Vehicle Type: \${this.type}\`);
    console.log(\`Engine: \${this.engine}\`);
    console.log(\`Wheels: \${this.wheels}\`);
    console.log(\`Color: \${this.color}\`);
  }
}
```

---

### ✅ `VehicleBuilder.ts` – Builder Class

```ts
import { Vehicle } from './Vehicle';

export class VehicleBuilder {
  private vehicle: Vehicle;

  constructor() {
    this.vehicle = new Vehicle();
  }

  setType(type: string): VehicleBuilder {
    this.vehicle.setType(type);
    return this;
  }

  setEngine(engine: string): VehicleBuilder {
    this.vehicle.setEngine(engine);
    return this;
  }

  setWheels(wheels: number): VehicleBuilder {
    this.vehicle.setWheels(wheels);
    return this;
  }

  setColor(color: string): VehicleBuilder {
    this.vehicle.setColor(color);
    return this;
  }

  build(): Vehicle {
    return this.vehicle;
  }
}
```

---

### ✅ `index.ts` – Client Code

```ts
import { VehicleBuilder } from './VehicleBuilder';

const sportsCar = new VehicleBuilder()
  .setType('Sports Car')
  .setEngine('V8')
  .setWheels(4)
  .setColor('Red')
  .build();

sportsCar.showSpecs();

const bike = new VehicleBuilder()
  .setType('Bike')
  .setEngine('150cc')
  .setWheels(2)
  .setColor('Black')
  .build();

bike.showSpecs();
```

---

## 📈 Benefits of Builder Pattern

✅ **Open/Closed Principle** – Easily extend with new types of vehicles without modifying existing code.  
✅ **Step-by-step Object Creation** – Create objects with complex configuration step-by-step.  
✅ **Readable & Maintainable Code** – Fluent method chaining provides better readability.  
✅ **Avoid Constructor Overload** – Prevents constructor explosion with many optional parameters.  
✅ **Reusable Builders** – The same builder class can be reused to create multiple object configurations.

---

## ✅ Use Case

Use the Builder Pattern when:
- You need to build complex objects step-by-step.
- You want different representations of the same object.
- You want to avoid too many constructor parameters or overloads.

---

## 🧪 Output Example

```
Vehicle Type: Sports Car
Engine: V8
Wheels: 4
Color: Red

Vehicle Type: Bike
Engine: 150cc
Wheels: 2
Color: Black
```

---