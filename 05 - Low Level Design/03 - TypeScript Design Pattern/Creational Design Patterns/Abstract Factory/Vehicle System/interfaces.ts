interface Car {
    drive(): void;
}

interface Bike {
    ride(): void;
}

interface Bicycle {
    ride(): void;
}

// Abstract Factory interfaces
interface VehicleFactory {
    createBike(): Bike;
    createCar(): Car;
    createBicycle(): Bicycle;
}

export { Car, Bike, Bicycle, VehicleFactory };