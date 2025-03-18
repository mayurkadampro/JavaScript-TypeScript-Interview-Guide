# Strategy Pattern in Vehicle System

## Overview
The **Strategy Design Pattern** is used to encapsulate different behaviors in separate classes and make them interchangeable. In our **Vehicle System**, different types of cars have different driving behaviors. Instead of implementing multiple `drive()` methods within each car class, we extract the driving behavior into separate strategy classes, following the **Strategy Pattern**.

## Problem Statement
Initially, every car class had its own `drive()` method, even if some of them shared the same behavior. This led to **code duplication** and **maintenance difficulties**. To resolve this, we use the **Strategy Pattern**, which allows each car to delegate its driving behavior to an independent strategy class.

## Solution with Strategy Pattern
### **Structure**
```
/VehicleSystem
│── index.ts
│── /DriveStrategy
│   │── DriveStrategy.ts      # Interface defining the strategy
│   │── NormalDrive.ts        # Concrete Strategy for normal driving
│   │── NotANormalDrive.ts    # Concrete Strategy for non-normal driving
│── Car.ts                    # Base class that uses a drive strategy
│── NormalCar.ts              # Uses NormalDrive strategy
│── MountainCar.ts            # Uses NotANormalDrive strategy
│── SportsCar.ts              # Uses NotANormalDrive strategy
```

### **1. DriveStrategy.ts (Strategy Interface)**
```typescript
export interface DriveStrategy {
  drive(): void;
}
```

### **2. Concrete Strategies**
#### **NormalDrive.ts**
```typescript
import { DriveStrategy } from "./DriveStrategy";

export class NormalDrive implements DriveStrategy {
  drive(): void {
    console.log("Driving on a normal road.");
  }
}
```
#### **NotANormalDrive.ts**
```typescript
import { DriveStrategy } from "./DriveStrategy";

export class NotANormalDrive implements DriveStrategy {
  drive(): void {
    console.log("Car can't normally drive.");
  }
}
```

### **3. Vehicle Base Class Using Strategy**
#### **Car.ts**
```typescript
import { DriveStrategy } from "./DriveStrategy/DriveStrategy";

export class Car {
  protected driveStrategy: DriveStrategy;

  constructor(driveStrategy: DriveStrategy) {
    this.driveStrategy = driveStrategy;
  }

  drive(): void {
    this.driveStrategy.drive();
  }
}
```

### **4. Specific Car Implementations**
#### **NormalCar.ts**
```typescript
import { Car } from "./Car";
import { NormalDrive } from "./DriveStrategy/NormalDrive";

export class NormalCar extends Car {
  constructor() {
    super(new NormalDrive());
  }
}
```

#### **MountainCar.ts**
```typescript
import { Car } from "./Car";
import { NotANormalDrive } from "./DriveStrategy/NotANormalDrive";

export class MountainCar extends Car {
  constructor() {
    super(new NotANormalDrive());
  }
}
```

#### **SportsCar.ts**
```typescript
import { Car } from "./Car";
import { NotANormalDrive } from "./DriveStrategy/NotANormalDrive";

export class SportsCar extends Car {
  constructor() {
    super(new NotANormalDrive());
  }
}
```

### **5. Example Usage in index.ts**
```typescript
import { NormalCar } from "./NormalCar";
import { MountainCar } from "./MountainCar";

const normalCar = new NormalCar();
normalCar.drive(); // Output: Car can normally drive.

const mountainCar = new MountainCar();
mountainCar.drive(); // Output: Car can't normally drive.
```

## **Benefits of Using Strategy Pattern**
1. **Avoids Code Duplication** – Drive logic is encapsulated in separate strategy classes.
2. **Enhances Maintainability** – New driving behaviors can be added without modifying existing vehicle classes.
3. **Supports Open/Closed Principle** – Allows extension without modifying existing code.
4. **Promotes Flexibility** – The driving behavior can be changed dynamically at runtime.

This implementation ensures a scalable, flexible, and maintainable system by adhering to **SOLID** principles. 🚀