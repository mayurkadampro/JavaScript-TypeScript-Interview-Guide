# 🚦 Traffic Light System - State Design Pattern

## 📌 Overview
The **State Design Pattern** allows an object to change its behavior when its internal state changes. Instead of using multiple `if-else` conditions, each state is encapsulated into a separate class.

This example demonstrates a **Traffic Light System**, which transitions between different states: **Red**, **Yellow**, and **Green**.

---

## 🛠️ **Implementation Details**

### **1️⃣ State Interface**
The interface defines the `getState()` method that each state must implement.

```typescript
// TrafficLightState.ts
export interface TrafficLightState {
    getState(): void;
}
```

### **2️⃣ Concrete States**
Each traffic light state (Red, Yellow, Green) is implemented as a separate class.

```typescript
// RedLight.ts
import { TrafficLightState } from "./TrafficLightState";

export class RedLight implements TrafficLightState {
    getState(): void {
        console.log("🚦 Red Light - STOP!");
    }
}
```

```typescript
// YellowLight.ts
import { TrafficLightState } from "./TrafficLightState";

export class YellowLight implements TrafficLightState {
    getState(): void {
        console.log("🚦 Yellow Light - GET READY!");
    }
}
```

```typescript
// GreenLight.ts
import { TrafficLightState } from "./TrafficLightState";

export class GreenLight implements TrafficLightState {
    getState(): void {
        console.log("🚦 Green Light - GO!");
    }
}
```

### **3️⃣ Context Class (Traffic Light Controller)**
This class maintains the current state and delegates requests to it.

```typescript
// TrafficLight.ts
import { TrafficLightState } from "./TrafficLightState";

export class TrafficLight {
    private state: TrafficLightState;

    constructor(initialState: TrafficLightState) {
        this.state = initialState;
    }

    setState(state: TrafficLightState): void {
        this.state = state;
    }

    getState(): void {
        this.state.getState();
    }
}
```

### **4️⃣ Example Usage (Testing the Traffic Light System)**

```typescript
// index.ts
import { TrafficLight } from "./TrafficLight";
import { RedLight } from "./RedLight";
import { YellowLight } from "./YellowLight";
import { GreenLight } from "./GreenLight";

// Initialize with RedLight state
const trafficLight = new TrafficLight(new RedLight());
trafficLight.getState(); // Output: 🚦 Red Light - STOP!

// Change to Yellow Light
trafficLight.setState(new YellowLight());
trafficLight.getState(); // Output: 🚦 Yellow Light - GET READY!

// Change to Green Light
trafficLight.setState(new GreenLight());
trafficLight.getState(); // Output: 🚦 Green Light - GO!
```

---

## 📈 **Benefits of State Design Pattern**
✅ **Encapsulation** - Each state’s logic is encapsulated in separate classes.  
✅ **Improves Maintainability** - No long `if-else` conditions.  
✅ **Scalability** - Easily add new states without modifying existing logic.  
✅ **Better Readability** - Clearer, modular code structure.  

---

## 🔥 **Conclusion**
The **State Design Pattern** is useful when an object’s behavior changes based on its state. In this traffic light example, each light state is encapsulated separately, making the system more maintainable and scalable.

---

Would you like additional modifications or a real-world use case example? 🚀

