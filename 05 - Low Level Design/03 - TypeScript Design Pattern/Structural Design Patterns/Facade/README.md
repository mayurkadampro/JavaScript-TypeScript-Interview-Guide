# 🚗 Facade Design Pattern – Vehicle Starting System

The **Facade Design Pattern** is a structural design pattern that provides a simplified interface to a larger body of code, such as a complex subsystem. In this example, the pattern is used to simplify the vehicle starting process by hiding the internal complexities of components like `Engine`, `FuelPump`, and `Dashboard`.

---

## 📁 Folder Structure

```
/VehicleSystem
│── index.ts             # Entry point to start and stop the vehicle
│── Engine.ts            # Subsystem class representing engine operations
│── FuelPump.ts          # Subsystem class responsible for fuel delivery
│── Dashboard.ts         # Subsystem class handling dashboard lights
│── VehicleFacade.ts     # Facade class unifying all operations
```

---

## 🧩 Subsystem Classes

### `Engine.ts`
```ts
export class Engine {
  start(): void {
    console.log("Engine started...");
  }

  stop(): void {
    console.log("Engine stopped.");
  }
}
```

### `FuelPump.ts`
```ts
export class FuelPump {
  pump(): void {
    console.log("Fuel is being pumped...");
  }
}
```

### `Dashboard.ts`
```ts
export class Dashboard {
  turnOn(): void {
    console.log("Dashboard lights ON.");
  }

  turnOff(): void {
    console.log("Dashboard lights OFF.");
  }
}
```

---

## 🎯 Facade Class

### `VehicleFacade.ts`
```ts
import { Engine } from "./Engine";
import { FuelPump } from "./FuelPump";
import { Dashboard } from "./Dashboard";

export class VehicleFacade {
  private engine: Engine;
  private fuelPump: FuelPump;
  private dashboard: Dashboard;

  constructor() {
    this.engine = new Engine();
    this.fuelPump = new FuelPump();
    this.dashboard = new Dashboard();
  }

  startVehicle(): void {
    console.log("Starting vehicle...");
    this.dashboard.turnOn();
    this.fuelPump.pump();
    this.engine.start();
    console.log("Vehicle started ✅");
  }

  stopVehicle(): void {
    console.log("Stopping vehicle...");
    this.engine.stop();
    this.dashboard.turnOff();
    console.log("Vehicle stopped ❌");
  }
}
```

---

## 🚀 Entry Point

### `index.ts`
```ts
import { VehicleFacade } from "./VehicleFacade";

const vehicle = new VehicleFacade();
vehicle.startVehicle();

console.log("\n--- Some time later ---\n");

vehicle.stopVehicle();
```

---

## 🤔 Why Use the Facade Pattern?

Imagine needing to start a vehicle manually by interacting with each internal system (engine, fuel, lights, etc.) individually—this would be tedious and error-prone. Instead, the **Facade Pattern** offers a simplified API (`startVehicle()` / `stopVehicle()`) to manage all of that with a single call.

---

## ✅ Benefits

- 🔒 **Encapsulates Complexity**: Hides subsystem complexity from the client.
- 🔄 **Loose Coupling**: Reduces dependencies between client and subsystem classes.
- 🩼 **Cleaner Code**: Simplifies code for maintainability and scalability.
- 🚀 **Improved Usability**: Offers a straightforward interface for complex operations.

---

## 🧐 Pattern Type

**Structural Pattern** – focuses on how classes and objects are composed to form larger structures.

---

