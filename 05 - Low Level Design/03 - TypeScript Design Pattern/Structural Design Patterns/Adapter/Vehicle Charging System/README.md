# 🚗 Adapter Pattern - Vehicle Charging System

## 📜 Introduction
The **Adapter Pattern** is a **structural design pattern** that allows two incompatible interfaces to work together. In this example, we have two types of vehicles: **FuelCar** and **ElectricCar**. While FuelCar can be refueled, ElectricCar requires charging. The Adapter allows ElectricCar to be treated like a FuelCar by converting its `chargeBattery()` method into a `refuel()` method.

---

## 📂 Folder Structure
```
/VehicleSystem
│── index.ts                        # Client code to demonstrate adapter pattern
│── Vehicle.ts                      # Target Interface for vehicle refueling
│── FuelCar.ts                      # Adaptee (Existing FuelCar that supports refueling)
│── ElectricCar.ts                  # Adaptee (ElectricCar that requires charging)
│── ElectricCarAdapter.ts           # Adapter that converts charging to refueling
```

---

## 🛠️ Implementation

### **1️⃣ Target Interface**
Defines the expected interface for charging/refueling:
```typescript
// Vehicle.ts - Target Interface
export interface Vehicle {
    refuel(): void;  // Common interface for refueling/charging
}
```

### **2️⃣ FuelCar (Adaptee)**
Works with traditional fuel:
```typescript
// FuelCar.ts - Adaptee
import { Vehicle } from "./Vehicle";

export class FuelCar implements Vehicle {
    refuel(): void {
        console.log("Refueling the fuel car with petrol/diesel...");
    }
}
```

### **3️⃣ ElectricCar (Adaptee)**
Uses a different charging mechanism:
```typescript
// ElectricCar.ts - Adaptee
export class ElectricCar implements Vehicle {
    refuel(): void {
        throw new Error("Don't Support the refuel...");
    }

    chargeBattery(): void {
        console.log("Charging the batteries of electric car...");
    }
}
```

### **4️⃣ Adapter**
Converts `chargeBattery()` to `refuel()`:
```typescript
// ElectricCarAdapter.ts - Adapter
import { Vehicle } from "./Vehicle";
import { ElectricCar } from "./ElectricCar";

export class ElectricCarAdapter implements Vehicle {
    private electricCar: ElectricCar;

    constructor(electricCar: ElectricCar) {
        this.electricCar = electricCar;
    }

    refuel(): void {
        console.log("Using adapter to charge the electric car instead of refueling...");
        this.electricCar.chargeBattery(); // Adapting chargeBattery() to refuel()
    }
}
```

### **5️⃣ Client Code**
Uses both FuelCar and ElectricCarAdapter:
```typescript
// index.ts - Client Code
import { FuelCar } from "./FuelCar";
import { ElectricCar } from "./ElectricCar";
import { ElectricCarAdapter } from "./ElectricCarAdapter";
import { Vehicle } from "./Vehicle";

const fuelCar: Vehicle = new FuelCar();
const electricCarAdapter: Vehicle = new ElectricCarAdapter(new ElectricCar());

console.log("Using FuelCar:");
fuelCar.refuel();

console.log("\nUsing ElectricCar through Adapter:");
electricCarAdapter.refuel(); // Internally calls chargeBattery()
```

---

## 📌 Explanation
1. **FuelCar (`Adaptee`)** has a `refuel()` method.
2. **ElectricCar (`Adaptee`)** has `chargeBattery()`, which is different from `refuel()`.
3. **Vehicle (`Target Interface`)** expects a `refuel()` method.
4. **ElectricCarAdapter (`Adapter`)** makes `ElectricCar` compatible by mapping `chargeBattery()` to `refuel()`.
5. **Client Code** interacts with both **FuelCar** and **ElectricCarAdapter** using a common interface.

---

## ✅ Benefits of Adapter Pattern
✔ **Bridges the gap between incompatible interfaces**  
✔ **Encapsulates logic without modifying existing classes**  
✔ **Follows Open/Closed Principle** - Allows extension without modification  

---

## 🎯 Use Cases
- When integrating a new component that does not match existing interfaces.
- When working with legacy code that requires adaptation.
- When migrating to a new system while maintaining backward compatibility.

🚀 **Adapter Pattern ensures seamless integration and enhances code maintainability!**

