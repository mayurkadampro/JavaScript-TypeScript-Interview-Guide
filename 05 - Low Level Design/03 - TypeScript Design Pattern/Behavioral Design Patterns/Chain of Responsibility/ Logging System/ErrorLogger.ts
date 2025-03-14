import { Logger } from "./Logger";

class ErrorLogger extends Logger {
    constructor(nextLogger: Logger | null = null) {
        super(nextLogger);
    }

    log(logLevel: number, message: string) {
        if (logLevel === Logger.ERROR) {
            console.log(`ERROR : ${message}`);
        } else {
            super.setNext(logLevel, message);
        }
    }
}

export { ErrorLogger }; 