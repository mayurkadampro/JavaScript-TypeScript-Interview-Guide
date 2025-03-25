import { Observer } from "./interface";

export class TrafficSignal implements Observer {
    private observers: Observer[] = [];
    private signal: string = "RED";

    update(signal: string): void {
        throw new Error("Method not implemented.");
    }

    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    public changeSignal(newSignal: string): void {
        console.log(`🚦 Traffic Signal changed to: ${newSignal}`);
        this.signal = newSignal;
        this.notifyObservers();
    }

    private notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.signal));
    }

}