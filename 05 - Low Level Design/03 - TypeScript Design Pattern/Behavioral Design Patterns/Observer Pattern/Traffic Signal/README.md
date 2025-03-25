# 🚦 Traffic Signal Observer Design Pattern

## 📌 Overview
The **Observer Design Pattern** is a **behavioral pattern** that defines a **one-to-many dependency** between objects. When one object (the **subject**) changes its state, all its dependent objects (the **observers**) are notified and updated automatically.

In this example, we implement a **Traffic Signal System** where multiple vehicles act as observers and react to signal changes.

---

## 🛠️ Implementation

### **1. Participants in the Observer Pattern:**
- **Subject (TrafficSignal)**: Maintains a list of observers (vehicles) and notifies them of any state change.
- **Observers (Car, Bike, Truck, etc.)**: Register themselves to the traffic signal and react when the signal changes.

### **2. Code Explanation**

#### **Step 1: Create an Observer Interface**
```typescript
// Observer.ts - Defines the interface for observers
interface Observer {
    update(signal: string): void;
}
```
Each vehicle (Car, Bike, etc.) will implement this interface.

#### **Step 2: Implement the Subject (Traffic Signal)**
```typescript
// TrafficSignal.ts - Manages observers and notifies them
class TrafficSignal {
    private observers: Observer[] = [];
    private signal: string = "RED";
    
    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }
    
    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    setSignal(signal: string): void {
        console.log(`🚦 Traffic Signal changed to: ${signal}`);
        this.signal = signal;
        this.notifyObservers();
    }
    
    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.signal);
        }
    }
}
```
This class maintains a list of vehicles and notifies them when the signal changes.

#### **Step 3: Implement Concrete Observers (Vehicles)**
```typescript
// Car.ts - A concrete observer
class Car implements Observer {
    constructor(private name: string) {}
    update(signal: string): void {
        if (signal === "GREEN") {
            console.log(`🚗 ${this.name} starts moving.`);
        } else {
            console.log(`🚗 ${this.name} stops.`);
        }
    }
}
```
```typescript
// Bike.ts - Another observer
class Bike implements Observer {
    constructor(private name: string) {}
    update(signal: string): void {
        if (signal === "GREEN") {
            console.log(`🏍️ ${this.name} starts moving.`);
        } else {
            console.log(`🏍️ ${this.name} stops.`);
        }
    }
}
```
Each vehicle reacts differently based on the signal change.

#### **Step 4: Test the Observer Pattern**
```typescript
// index.ts - Testing the Observer Pattern
const trafficSignal = new TrafficSignal();

const car1 = new Car("Car A");
const car2 = new Car("Car B");
const bike1 = new Bike("Bike X");

trafficSignal.addObserver(car1);
trafficSignal.addObserver(car2);
trafficSignal.addObserver(bike1);

trafficSignal.setSignal("RED");  // All vehicles should stop
trafficSignal.setSignal("GREEN"); // All vehicles should start moving
```

--- 

## 📈 Benefits of Observer Pattern
✅ **Loose Coupling** - The subject and observers are loosely coupled. The Traffic Signal doesn't need to know details about the vehicles.  
✅ **Scalability** - New vehicles (observers) can be added without modifying existing code.  
✅ **Automatic Notifications** - Observers get real-time updates when the signal changes.  
✅ **Event-Driven System** - Works well for real-world systems where changes trigger actions.

---

## 🎯 When to Use Observer Pattern?
- When multiple objects need to react to a single state change.
- In event-driven systems (e.g., UI listeners, messaging systems).
- To implement **publish-subscribe** mechanisms.
