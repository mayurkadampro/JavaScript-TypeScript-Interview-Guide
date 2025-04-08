export class Vehicle {
    private type: string = '';
    private engine: string = '';
    private wheels: number = 0;
    private color: string = '';

    setType(type: string): void {
        this.type = type;
    }

    setEngine(engine: string): void {
        this.engine = engine;
    }

    setWheels(wheels: number): void {
        this.wheels = wheels;
    }

    setColor(color: string): void {
        this.color = color;
    }

    showSpecs(): void {
        console.log(`Vehicle Type: ${this.type}`);
        console.log(`Engine: ${this.engine}`);
        console.log(`Wheels: ${this.wheels}`);
        console.log(`Color: ${this.color}`);
    }
}
