# Abstract Factory Pattern - Vehicle System

## Overview
The **Abstract Factory Pattern** is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. This pattern is useful when multiple objects with a shared theme need to be instantiated dynamically based on some criteria.

In this **Vehicle System**, the Abstract Factory Pattern is implemented to create **Normal** and **Sports** variants of different vehicles like **Cars, Bikes, and Bicycles**.

## Folder Structure
```
/VehicleSystem
│── index.ts
│── interfaces.ts
│── NormalVehicleFactory.ts
│── SportsVehicleFactory.ts
│── /Car
│   │── NormalCar.ts
│   │── SportsCar.ts
│── /Bike
│   │── NormalBike.ts
│   │── SportsBike.ts
│── /Bicycle
│   │── NormalBicycle.ts
│   │── SportsBicycle.ts
```

## Design Flow
1. **Define an Abstract Interface**
   - The `interfaces.ts` file contains an interface that defines the common structure of all vehicle types.

2. **Concrete Vehicle Implementations**
   - `NormalCar.ts` and `SportsCar.ts` implement the `Car` interface.
   - `NormalBike.ts` and `SportsBike.ts` implement the `Bike` interface.
   - `NormalBicycle.ts` and `SportsBicycle.ts` implement the `Bicycle` interface.

3. **Abstract Factory Interface**
   - The `interfaces.ts` file also contains an abstract factory interface that declares methods for creating different types of vehicles.

4. **Concrete Factory Implementations**
   - `NormalVehicleFactory.ts` implements the abstract factory to create **Normal** variants.
   - `SportsVehicleFactory.ts` implements the abstract factory to create **Sports** variants.

5. **Client Code Usage**
   - The `index.ts` file contains the client code that dynamically selects the appropriate factory (Normal or Sports) and creates the required vehicle objects.

## Code Flow
- The client decides which factory to use based on the requirement.
- The factory generates an instance of the specific vehicle type.
- The created vehicle object follows the structure defined in the interface, ensuring consistency across different vehicle types.

## Benefits of Abstract Factory Pattern
- **Encapsulation of Object Creation:** Clients do not need to know the exact class names; they interact with the abstract factory.
- **Scalability & Maintainability:** New types of vehicles can be added without modifying existing client code.
- **Consistency Across Products:** Ensures all created objects follow a uniform structure and behavior.
- **Separation of Concerns:** The object creation logic is separated from its usage, improving modularity.

## When to Use Abstract Factory Pattern?
- When a system needs to create multiple related objects dynamically.
- When enforcing consistency across multiple families of objects.
- When object creation logic needs to be encapsulated and separated from the main business logic.

This implementation of the **Abstract Factory Pattern** in a **Vehicle System** provides a structured approach to vehicle creation, allowing flexibility and scalability for future enhancements.

