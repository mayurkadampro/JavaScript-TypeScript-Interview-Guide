# Vehicle System (Without Strategy Pattern)

## Overview
This implementation of the Vehicle System does not follow the Strategy Pattern. Instead, it directly defines behaviors within specific vehicle classes, leading to code duplication, limited flexibility, and difficulty in maintaining and extending functionality.

## Folder Structure
```
/VehicleSystem
│── index.ts
│── Car.ts
│── NormalCar.ts
│── MountainCar.ts
```

### Issues with the Current Design
In the current example, we have created multiple drive methods, even though cars of the same type share the same behavior. To avoid code duplication and improve maintainability, we need the Strategy Design Pattern.

## Example Code (Without Strategy Pattern)
```typescript
// Car.ts
class Car {
    drive(): void {
        console.log("Car can normally drive.");
    }

    hasEngine(): void {
        console.log("Yes, engine present.");
    }
};


// SportsCar.ts
class SportsCar extends Car {
    drive(): void {
        console.log("Car can't normally drive");
    }
}

// MountainCar.ts
class MountainCar extends Car {
    drive(): void {
        console.log("Car can't normally drive");
    }
}

// index.ts
const normalCar = new NormalCar();
normalCar.drive(); // Output: Car can normally drive.

const mountainCar = new MountainCar();
mountainCar.drive(); // Output: Car can't normally drive
```

## Why We Need the Strategy Pattern
To resolve these issues, we can introduce the Strategy Pattern, which will:
- Separate the driving behavior from the car classes.
- Allow easy modification of driving strategies without altering existing classes.
- Enable dynamic assignment of driving behaviors at runtime.
- Promote code reuse and adhere to the Open-Closed Principle.

In the next iteration, we will refactor this system to use the Strategy Pattern for improved maintainability and flexibility.

