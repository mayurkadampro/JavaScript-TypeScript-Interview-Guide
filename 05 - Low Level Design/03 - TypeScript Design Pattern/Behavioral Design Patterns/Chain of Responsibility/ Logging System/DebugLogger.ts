import { Logger } from "./Logger";

class DebugLogger extends Logger {

    constructor(nextLogger: Logger | null = null) {
        super(nextLogger);
    }

    log(logLevel: number, message: string) {
        if (logLevel === Logger.DEBUG) {
            console.log(`DEBUG : ${message}`);
        } else {
            super.setNext(logLevel, message);
        }
    }
}

export { DebugLogger }; 