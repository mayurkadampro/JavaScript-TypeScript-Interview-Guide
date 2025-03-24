# Vehicle System - Decorator Design Pattern

## 📌 Introduction
The **Decorator Design Pattern** is a structural pattern that allows us to dynamically add behavior to objects without modifying their existing structure. This pattern follows the **Open/Closed Principle**, making it easy to extend functionalities without altering the original class.

In this repository, we implement the **Decorator Pattern** in a **Vehicle System**, where we can add features like **GPS, Sunroof, and Sports Mode** to a base car dynamically.

---

## 📁 Folder Structure
```
/VehicleSystem  
│── index.ts                      # Entry point for testing the decorators  
│── Vehicle.ts                    # Interface for Vehicle component  
│── /Base  
│   │── BaseCar.ts                # Concrete component (Base Car)  
│   │── BaseBike.ts               # Concrete component (Base Bike)  
│── /Decorators  
│   │── VehicleDecorator.ts       # Abstract class for decorators  
│── GPS.ts                        # Concrete Decorator - Adds GPS  
│── Sunroof.ts                    # Concrete Decorator - Adds Sunroof  
│── SportsMode.ts                 # Concrete Decorator - Adds Sports Mode
```

## 🎯 Problem Statement
We need a **flexible way to add features to cars & bikes** (such as GPS, Sunroof, and Sports Mode) **without modifying the base class**. Instead of creating multiple subclasses for different feature combinations, we use **Decorators** to dynamically enhance car functionality.

---

## 🏗️ Implementation Details

### **1️⃣ Component Interface (Vehicle)**
Defines the core structure of a vehicle:
```typescript
export interface Vehicle {
    getDescription(): string;
    getCost(): number;
}
```

### **2️⃣ Concrete Component (Base Car)**
A simple base car with a default description and cost:
```typescript
export class BaseCar implements Vehicle {
    getDescription(): string {
        return "Base Car";
    }
    getCost(): number {
        return 500000; // Base price
    }
}
```

### **3️⃣ Abstract Decorator (VehicleDecorator)**
Wraps the vehicle and allows additional functionality:
```typescript
export class VehicleDecorator implements Vehicle {
    decoratedVehicle: Vehicle;

    constructor(decoratedVehicle: Vehicle) {
        this.decoratedVehicle = decoratedVehicle;
    }

    getCost(): number {
        return this.decoratedVehicle.getCost();
    }
    getDescription(): string {
        return this.decoratedVehicle.getDescription();
    }
}
```

### **4️⃣ Concrete Decorators (Adding Features)**
#### 📍 GPS Feature:
```typescript
export class GPS extends CarDecorator {
    getDescription(): string {
        return `${this.decoratedCar.getDescription()}, GPS`;
    }
    getCost(): number {
        return this.decoratedCar.getCost() + 30000;
    }
}
```
#### 📍 Sunroof Feature:
```typescript
export class Sunroof extends VehicleDecorator {
    getDescription(): string {
        return `${this.decoratedCar.getDescription()}, Sunroof`;
    }
    getCost(): number {
        return this.decoratedCar.getCost() + 50000;
    }
}
```
#### 📍 Sports Mode Feature:
```typescript
export class SportsMode extends VehicleDecorator {
    getDescription(): string {
        return `${this.decoratedCar.getDescription()}, Sports Mode`;
    }
    getCost(): number {
        return this.decoratedCar.getCost() + 70000;
    }
}
```

---

## 🚀 Running the Code
The `index.ts` file demonstrates how to apply the decorators dynamically:
```typescript
import { BasicCar } from "./BasicCar";
import { GPS } from "./GPS";
import { Sunroof } from "./Sunroof";
import { SportsMode } from "./SportsMode";

// CAR
let myCar = new BaseCar();

console.log(`${myCar.getDescription()} costs ₹${myCar.getCost()}`);
console.log();

myCar = new GPS(myCar);
console.log(`${myCar.getDescription()} costs ₹${myCar.getCost()}`);
console.log();

myCar = new Sunroof(myCar);
console.log(`${myCar.getDescription()} costs ₹${myCar.getCost()}`);
console.log();

myCar = new SportsMode(myCar);
console.log(`${myCar.getDescription()} costs ₹${myCar.getCost()}`);
console.log();

// BIKE
let myBike = new BaseBike();

console.log(`${myBike.getDescription()} costs ₹${myBike.getCost()}`);
console.log();

myBike = new GPS(myBike);
console.log(`${myBike.getDescription()} costs ₹${myBike.getCost()}`);
console.log();

myBike = new SportsMode(myBike);
console.log(`${myBike.getDescription()} costs ₹${myBike.getCost()}`);
console.log();
```

### **📝 Expected Output**
```
Base Car costs ₹500000

Base Car, GPS costs ₹530000

Base Car, GPS, Sunroof costs ₹580000

Base Car, GPS, Sunroof, Sport Mode. costs ₹650000

Base Bike costs ₹100000

Base Bike, GPS costs ₹130000

Base Bike, GPS, Sport Mode. costs ₹200000
```

---

## 📈 Benefits of Decorator Pattern  
✅ **Open/Closed Principle** - Extend functionality without modifying existing code.  
✅ **Flexible & Scalable** - Add or remove features dynamically.  
✅ **Avoids Subclass Explosion** - No need to create multiple subclasses for different feature combinations.  
✅ **Runtime Behavior Modification** - Features can be added at runtime based on requirements.  


---

## 🏆 Conclusion
The **Decorator Pattern** is an excellent choice when we need to add new functionalities dynamically without modifying the core structure. It provides a clean and scalable way to enhance objects without subclassing.