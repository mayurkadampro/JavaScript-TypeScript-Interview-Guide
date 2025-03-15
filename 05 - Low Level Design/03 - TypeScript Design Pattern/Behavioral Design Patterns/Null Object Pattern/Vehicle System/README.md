# Null Object Pattern - Vehicle System

## Overview
This project demonstrates the **Null Object Pattern** using a Vehicle system in TypeScript. The pattern is used to avoid `null` checks by providing a default behavior for cases where an object is expected but not available. Instead of returning `null`, a **NullVehicle** class is used to handle such cases gracefully.

## Design Pattern Explanation
The **Null Object Pattern** is a behavioral design pattern that provides an object as a surrogate for the absence of a real object. It helps eliminate `null` checks and improves code maintainability.

## Project Structure
```
├── Bicycle.ts
├── Bike.ts
├── Car.ts
├── NullVehicle.ts
├── Vehicle.ts
├── VehicleFactory.ts
└── index.ts
```

### **1. Vehicle Base Class**
`Vehicle.ts` defines an abstract class that serves as the base for all vehicle types. It includes methods that each concrete vehicle type must implement.
```typescript
abstract class Vehicle {
    abstract isEngine(): boolean;
    abstract isElectric(): boolean;
    abstract getEngineCount(): number;
}
```

### **2. Concrete Vehicle Implementations**
- `Car.ts`, `Bike.ts`, and `Bicycle.ts` implement the `Vehicle` class and provide real behavior.
- Each concrete class returns values specific to its type.

### **3. Null Object Implementation**
- `NullVehicle.ts` is a subclass of `Vehicle` that provides default values instead of returning `null`.
```typescript
class NullVehicle extends Vehicle {
    isEngine(): boolean { return false; }
    isElectric(): boolean { return false; }
    getEngineCount(): number { return 0; }
}
```

### **4. Factory for Creating Vehicles**
- `VehicleFactory.ts` returns an instance of a requested vehicle type.
- If an invalid vehicle type is requested, it returns an instance of `NullVehicle`.
```typescript
class VehicleFactory {
    static getVehicleObject(vehicleType: string): Vehicle {
        switch (vehicleType) {
            case "Car": return new Car();
            case "Bike": return new Bike();
            case "Bicycle": return new Bicycle();
            default: return new NullVehicle();
        }
    }
}
```

### **5. Usage Example**
- `index.ts` demonstrates how the factory is used to create vehicles.
```typescript
const car = VehicleFactory.getVehicleObject("Car");
console.log(car.isEngine()); // true

const unknownVehicle = VehicleFactory.getVehicleObject("Truck");
console.log(unknownVehicle.isEngine()); // false (handled by NullVehicle)
```

## Benefits of Using the Null Object Pattern
✅ **Removes null checks**: No need for repeated `if (vehicle !== null)` checks.  
✅ **Improves code maintainability**: Cleaner and more readable code.  
✅ **Prevents null pointer errors**: Avoids runtime crashes due to unexpected `null` values. Here in TypeScript it will be undefined value.  
✅ **Encapsulates default behavior**: Defines expected behavior for missing objects in one place.

## When to Use
- When handling missing or optional objects in a system.
- When you want to avoid excessive null checks.
- When returning `null` would require additional logic in multiple places.

## Conclusion
This project demonstrates how the **Null Object Pattern** improves code readability and reliability by replacing `null` with a default, non-functional object (`NullVehicle`). This ensures the system remains stable even when an expected object is missing.

