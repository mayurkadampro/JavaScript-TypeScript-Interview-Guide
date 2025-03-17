# Vehicle Factory Pattern

## Overview
This project implements the **Factory Pattern** to manage the creation of different types of vehicles. The Factory Pattern is a **Creational Design Pattern** that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.

## Project Structure
```
- Bicycle.ts
- Bike.ts
- Car.ts
- Vehicle.ts (Interface)
- VehicleFactory.ts (Factory Class)
- index.ts (Usage Example)
```

### Components:
1. **Vehicle Interface (`Vehicle.ts`)**
   - Defines the common methods all vehicle types must implement.
   
2. **Concrete Vehicle Classes**
   - `Bicycle.ts` → Implements `Vehicle` (No Engine, Electric)
   - `Bike.ts` → Implements `Vehicle` (Engine, Electric)
   - `Car.ts` → Implements `Vehicle` (Engine, Electric)

3. **Factory Class (`VehicleFactory.ts`)**
   - Provides a static method `getVehicleObject(vehicleType: string)` to create vehicle objects based on input.

4. **Usage (`index.ts`)**
   - Demonstrates how to use the factory to create vehicle objects dynamically.

## Flow Explanation
1. The user requests a vehicle by name using `VehicleFactory.getVehicleObject("Car")`.
2. The factory checks the type and returns the corresponding instance (e.g., `new Car()`).
3. If the requested vehicle type is invalid, `null` is returned (could be improved using a `NullVehicle` class).
4. The created object can then be used via the `Vehicle` interface methods (`isEngine()`, `isElectric()`, `getEngineCount()`).

## Benefits of the Factory Pattern
- **Encapsulation** – Hides object creation logic from the client.
- **Scalability** – New vehicle types can be added with minimal changes.
- **Maintainability** – Reduces code duplication and centralizes object creation.

## Suggested Improvements
- **Use an Enum** instead of a string for `vehicleType`.
- **Implement the Null Object Pattern** to handle unknown vehicle types gracefully.

## Example Usage
```typescript
const myVehicle = VehicleFactory.getVehicleObject("Bicycle");
console.log(myVehicle?.isEngine());       // false
console.log(myVehicle?.isElectric());     // true
console.log(myVehicle?.getEngineCount()); // 0
```

This implementation demonstrates the Factory Pattern effectively while leaving room for enhancements like improved type safety and better handling of unknown types.

