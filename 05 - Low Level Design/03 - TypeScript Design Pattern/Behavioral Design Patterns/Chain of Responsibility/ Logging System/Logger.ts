abstract class Logger {
    static INFO = 1;
    static DEBUG = 2;
    static ERROR = 3;
    static WARNING = 4;

    nextLogger: Logger | null;
    constructor(nextLogger: Logger | null = null) {
        this.nextLogger = nextLogger;
    }

    abstract log(logLevel: number, message: string);

    setNext(logLevel: number, message: string) {
        this.nextLogger?.log(logLevel, message);
    }
}

export { Logger };