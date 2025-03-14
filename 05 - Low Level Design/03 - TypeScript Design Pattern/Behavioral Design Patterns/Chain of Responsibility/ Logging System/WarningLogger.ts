import { Logger } from "./Logger";

class WarningLogger extends Logger {
    constructor(nextLogger: Logger | null = null) {
        super(nextLogger);
    }

    log(logLevel: number, message: string) {
        if (logLevel === Logger.WARNING) {
            console.log(`WARNING : ${message}`);
        } else {
            super.setNext(logLevel, message);
        }
    }
}

export { WarningLogger }; 